import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import HeaderAndFooterWrapper from "../components/HeaderAndFooterWrapper";
import SingleBeneficiaryCard from "../components/beneficiary/SingleBeneficiaryCard";
import FullScreenDialogCustom from "../components/common/FullScreenDialogCustom";
import RegisterBeneficiary from "./beneficiary/RegisterBeneficiary";
import { useDispatch, useSelector } from "react-redux";
import {
  Beneficiary as BeneficiaryModel,
  clearBeneLoading,
  getBeneficiaries,
  selectBeneficiary,
} from "../store/slices/beneficiarySlice";
import { AppDispatch, RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { clearDonationLoadingStatus } from "../store/slices/donationSlice";

const Beneficiary = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const beneficiaryList = useSelector(
    (state: RootState) => state.bene.beneficiaryList
  );

  const handleOpen = (openValue: boolean) => {
    setOpen(openValue);
    dispatch(clearBeneLoading({}));
  };

  React.useEffect(() => {
    dispatch(getBeneficiaries());
  }, []);

  const handleSelect = (beneficiary: BeneficiaryModel) => {
    dispatch(selectBeneficiary(beneficiary));
    dispatch(clearDonationLoadingStatus({}));
    navigate("/beneficiaries/details");
  };

  return (
    <div>
      <HeaderAndFooterWrapper>
        <Grid container sx={{pt:1}}>
          <Grid item xs={10}>
            <Typography> Beneficiary </Typography>
          </Grid>
          <Grid item xs={2}>
            <FullScreenDialogCustom
              handleClick={()=>{}}
              open={open}
              setOpen={handleOpen}
              title="Register New Beneficiary"
              mainLayout={<RegisterBeneficiary setOpen={setOpen} />}
            >
              <Button style={{backgroundColor:"green", color:'white'}}> Register </Button>
            </FullScreenDialogCustom>
          </Grid>
        </Grid>

        {/* <div style={{ margin: "0px 200px" }}> */}
        <Grid container spacing={1}>
          {beneficiaryList.length > 0 &&
            beneficiaryList.map((val, key) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={key}
                  onClick={() => handleSelect(val)}
                >
                  <SingleBeneficiaryCard
                    name={val.name}
                    reason={val.description}
                    address={val.address}
                    image={val.image}
                    currentDonation={val.curren_donation}
                    donationGoal={val.donation_goal}
                  />
                </Grid>
              );
            })}
        </Grid>
        {/* </div> */}
      </HeaderAndFooterWrapper>
    </div>
  );
};

export default Beneficiary;
