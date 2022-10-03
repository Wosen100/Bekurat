import { Button, Card, Typography } from "@mui/material";
import LinearProgressBar from "../../components/common/LinearProgressBar";
import { RWebShare } from "react-web-share";
import FullScreenDialogCustom from "../../components/common/FullScreenDialogCustom";
import React from "react";
import DonateForm from "./DonateForm";

interface DonateCardProps {
  currentDonation: number;
  donationGoal: number;
  title: string;
}

export default function DonateCard({
  currentDonation,
  donationGoal,
  title,
}: DonateCardProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card sx={{ ml: 5, p: 2 }}>
      <Typography
        style={{
          fontWeight: "700",
          marginTop: "10px",
          fontSize: "18px",
        }}
      >
        £{currentDonation}
        <span
          style={{
            color: "grey",
            fontSize: "15px",
            fontWeight: "normal",
          }}
        >
          {" "}
          raised of £{donationGoal} goal
        </span>
      </Typography>
      <br />
      <LinearProgressBar value={(currentDonation / donationGoal) * 100} />
      <br />
      <RWebShare
        data={{
          text: "",
          url: "http://localhost:3000/beneficiaries/",
          title: title,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <Button
          variant="contained"
          fullWidth
          style={{
            height: "50px",
            color: "black",
            fontWeight: "bold",
            backgroundColor: "lightgreen",
          }}
        >
          Share 🔗
        </Button>
      </RWebShare>
      <br />
      <br />
      <FullScreenDialogCustom
        title="Donate"
        open={open}
        setOpen={setOpen}
        mainLayout={<DonateForm />}
      >
        <Button
          variant="contained"
          fullWidth
          style={{
            height: "50px",
            color: "white",
            fontWeight: "bold",
            backgroundColor: "green",
          }}
        >
          Donate Now
        </Button>
      </FullScreenDialogCustom>
    </Card>
  );
}
