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
        <Grid container>
          <Grid item xs={10}>
            <Typography> Beneficiary </Typography>
          </Grid>
          <Grid item xs={2}>
            <FullScreenDialogCustom
              handleClick={() => {}}
              open={open}
              setOpen={handleOpen}
              title="Register New Beneficiary"
              mainLayout={<RegisterBeneficiary setOpen={setOpen} />}
            >
              <Button> Register </Button>
            </FullScreenDialogCustom>
          </Grid>
        </Grid>

        {/* <div style={{ margin: "0px 200px" }}> */}
        <Grid container spacing={2} justifyContent="center">
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
                  <div
                    style={{
                      boxShadow: "rgb(0 1 10 / 5%) 0px 5px 10px",
                      background: "#FFF",
                      borderRadius: "1rem",
                      border: "2px solid green",
                      marginBottom: "40px",
                      height: "100%",
                      margin: "10px",
                      // position: "relative",
                      // display: "flex",
                    }}
                  >
                    <SingleBeneficiaryCard
                      name={val.name}
                      reason={val.description}
                      address={val.address}
                      image={val.image}
                      currentDonation={val.curren_donation}
                      donationGoal={val.donation_goal}
                    />
                  </div>
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
