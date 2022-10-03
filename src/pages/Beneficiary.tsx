import React from "react";
import { Grid, Typography, Button, Card } from "@mui/material";
import HeaderAndFooterWrapper from "../components/HeaderAndFooterWrapper";
import SingleBeneficiaryCard from "../components/beneficiary/SingleBeneficiaryCard";
import FullScreenDialogCustom from "../components/common/FullScreenDialogCustom";
import RegisterBeneficiary from "./beneficiary/RegisterBeneficiary";
import { useDispatch, useSelector } from "react-redux";
import {
  Beneficiary as BeneficiaryModel,
  getBeneficiaries,
  selectBeneficiary,
} from "../store/slices/beneficiarySlice";
import { AppDispatch, RootState } from "../store";
import { useNavigate } from "react-router-dom";

const Beneficiary = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const beneficiaryList = useSelector(
    (state: RootState) => state.bene.beneficiaryList
  );

  React.useEffect(() => {
    dispatch(getBeneficiaries());
  }, []);

  const handleSelect = (beneficiary: BeneficiaryModel) => {
    dispatch(selectBeneficiary(beneficiary));
    navigate("/beneficiaries/details");
  };

  return (
    <HeaderAndFooterWrapper>
        <div style={{paddingTop:"60px"}}>
        <Grid container>
          <Grid item xs={10}>
            <Typography> Beneficiaries </Typography>
          </Grid>
          <Grid item xs={2}>
            <FullScreenDialogCustom
              open={open}
              setOpen={setOpen}
              title="Register New Beneficiary"
              mainLayout={<RegisterBeneficiary setOpen={setOpen} />}
            >
              <Button> <strong> Start Your Fundraising here  </strong> </Button>
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
    </div>
      </HeaderAndFooterWrapper>
  );
};

export default Beneficiary;
