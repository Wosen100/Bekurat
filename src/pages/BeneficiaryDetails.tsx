import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import HeaderAndFooterWrapper from "../components/HeaderAndFooterWrapper";
import { RootState } from "../store";

export default function BeneficiaryDetails() {
  const selectedBeneficiary = useSelector(
    (state: RootState) => state.bene.selectedBeneficiary
  );

  const { name, image, description } = selectedBeneficiary!;

  return (
    <HeaderAndFooterWrapper>
      <div>{name}</div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={image} />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>

        <Grid item xs={12}>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </HeaderAndFooterWrapper>
  );
}
