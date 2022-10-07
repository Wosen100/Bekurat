import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LinearProgressBar from "../components/common/LinearProgressBar";
import HeaderAndFooterWrapper from "../components/HeaderAndFooterWrapper";
import { RootState } from "../store";
import DonateCard from "./beneficiaryDetails/DonateCard";

export default function BeneficiaryDetails() {
  const selectedBeneficiary = useSelector(
    (state: RootState) => state.bene.selectedBeneficiary
  );

  const { name, image, description, donation_goal, curren_donation } =
    selectedBeneficiary!;

  return (
    <HeaderAndFooterWrapper>
      <div style={{ padding: "60px 100px" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography style={{ fontWeight: "bold" }} variant={"h4"}>
              {name}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <br />
            <img src={image} style={{ width: "100%" }} />
            <br />
            <br />
            <Typography>{description}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <br />
            <DonateCard
              currentDonation={curren_donation}
              donationGoal={donation_goal}
              title={name}
            />
          </Grid>
        </Grid>
      </div>
    </HeaderAndFooterWrapper>
  );
}
