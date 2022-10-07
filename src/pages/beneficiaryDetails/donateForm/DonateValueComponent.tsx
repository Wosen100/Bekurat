import {
  InputAdornment,
  TextField,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

interface DonateValueComponentProps {
  image: string;
  name: string;
  setDonateValue: Function;
  handleContinue: Function;
  isContinue: boolean;
  isEnabled: boolean;
}

export default function DonateValueComponent({
  image,
  setDonateValue,
  name,
  isContinue,
  handleContinue,
  isEnabled,
}: DonateValueComponentProps) {
  return (
    <div>
      <Grid item container>
        <Grid item xs={12} sm={4}>
          <img src={image} style={{ width: "100%", borderRadius: "2px" }} />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            You're supporing <b>{name}</b>{" "}
          </Typography>
          <br />
          <Typography style={{ fontSize: "12px", color: "grey" }}>
            <i>Your donation will be in support of Kia Slade</i>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div style={{ marginTop: "20px" }}>
          <Typography sx={{ mb: 2 }}>
            <b>Enter your donation</b>
          </Typography>
          <TextField
            onChange={(e) => setDonateValue(e.target.value)}
            InputProps={{
              sx: {
                "& input": {
                  textAlign: "right",
                  fontSize: "30px",
                },
              },
              startAdornment: (
                <InputAdornment position="start">
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Typography
                        style={{ fontWeight: "bold", color: "black" }}
                      >
                        $
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{ fontWeight: "bold", color: "black" }}
                      >
                        {" "}
                        USD
                      </Typography>
                    </Grid>
                  </Grid>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <Typography style={{ fontSize: "30px" }}>.00</Typography>
                </InputAdornment>
              ),
            }}
            fullWidth
            type={"number"}
          />
        </div>
      </Grid>
      <br />
      <Typography style={{ color: "grey" }}>
        We guarantee you a full refund for up to a year in the rare event that
        fraud occurs.
      </Typography>
      <br />
      {!isContinue && (
        <Button
          disabled={!isEnabled}
          onClick={() => handleContinue()}
          variant="contained"
          style={{
            background: !isEnabled ? "white" : "green",
          }}
        >
          Continue
        </Button>
      )}
    </div>
  );
}
