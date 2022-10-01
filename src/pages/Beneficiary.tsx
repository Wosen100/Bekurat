import React from "react";
import { Grid, Typography, Button, Card } from "@mui/material";
import HeaderAndFooterWrapper from "../components/HeaderAndFooterWrapper";
import SingleBeneficiaryCard from "../components/beneficiary/SingleBeneficiaryCard";
import FullScreenDialogCustom from "../components/common/FullScreenDialogCustom";
import RegisterBeneficiary from "./beneficiary/RegisterBeneficiary";
import { useDispatch, useSelector } from "react-redux";
import { getBeneficiaries } from "../store/slices/beneficiarySlice";
import { AppDispatch, RootState } from "../store";

const Beneficiary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const beneficiaryList = useSelector(
    (state: RootState) => state.bene.beneficiaryList
  );

  React.useEffect(() => {
    dispatch(getBeneficiaries());
  }, []);

  return (
    <div>
      <HeaderAndFooterWrapper>
        <Grid container>
          <Grid item xs={10}>
            <Typography> Beneficiary </Typography>
          </Grid>
          <Grid item xs={2}>
            <FullScreenDialogCustom mainLayout={<RegisterBeneficiary />}>
              <Button> Register </Button>
            </FullScreenDialogCustom>
          </Grid>
        </Grid>

        {/* <div style={{ margin: "0px 200px" }}> */}
        <Grid container spacing={1}>
          {beneficiaryList.length > 0 &&
            beneficiaryList.map((val, key) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
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
