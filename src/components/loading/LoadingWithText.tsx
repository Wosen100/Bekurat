import { Grid, Typography } from "@mui/material";
import React from "react";
import LoadingSpinner from "../LoadingSpinner";

interface LoadingWithTextProps {
  uppreText: string;
  lowverText: string | boolean;
}

export default function LoadingWithText({
  uppreText,
  lowverText,
}: LoadingWithTextProps) {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <div
          style={{
            paddingTop: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
            {uppreText}
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <LoadingSpinner />
          </div>

          <Typography
            style={{
              fontSize: "15px",
              marginTop: "20px",
              fontStyle: "italic",
            }}
          >
            {lowverText}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
