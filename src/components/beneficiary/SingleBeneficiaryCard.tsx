import React from "react";
import { Card, Typography, Grid } from "@mui/material";
import LinearProgressBar from "../common/LinearProgressBar";

interface SingleBeneficiaryProps {
  image: string;
  address: string;
  name: string;
  reason: string;
  currentDonation: number;
  donationGoal: number;
}

export default function SingleBeneficiaryCard({
  image,
  address,
  name,
  reason,
  currentDonation,
  donationGoal,
}: SingleBeneficiaryProps) {
  return (
    <Card sx={{ p: 2, m: 2 }}>
      <img src={image} style={{ width: "100%" }} />

      <Typography style={{ color: "green", fontWeight: "700" }}>
        {address}
      </Typography>

      <Typography style={{ fontWeight: "700" }}>
        {name?.length < 35 ? name : name?.substring(0, 35) + "..."}
      </Typography>

      <hr />
      <Typography style={{ fontSize: "15px", color: "grey" }}>
        {reason?.length < 430 ? reason : reason?.substring(0, 430) + "..."}
      </Typography>

      <div style={{ marginTop: "10px" }}>
        <LinearProgressBar value={(currentDonation * 100) / donationGoal} />
        <Typography
          style={{ color: "green", fontWeight: "700", marginTop: "10px" }}
        >
          £{currentDonation.toLocaleString()}
          <span style={{ color: "black" }}>
            {" "}
            raised of £{donationGoal.toLocaleString()}
          </span>
        </Typography>
      </div>
    </Card>
  );
}
