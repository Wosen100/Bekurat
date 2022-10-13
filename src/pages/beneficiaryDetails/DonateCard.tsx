import { Button, Card, Typography } from "@mui/material";
import LinearProgressBar from "../../components/common/LinearProgressBar";
import { RWebShare } from "react-web-share";
import FullScreenDialogCustom from "../../components/common/FullScreenDialogCustom";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { clearCreateDonorLoading } from "../../store/slices/donorSlice";
import DonationPage from "./DonationPage";
import SocialShareButton from "../../components/common/SocialShareIcons";

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

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card sx={{ ml: 5, p: 2 }}>
      <Typography
        data-testid="donation_value"
        style={{
          fontWeight: "700",
          marginTop: "10px",
          fontSize: "18px",
        }}
      >
        ${currentDonation.toLocaleString()}
        <span
          style={{
            color: "grey",
            fontSize: "15px",
            fontWeight: "normal",
          }}
        >
          {" "}
          raised of ${donationGoal.toLocaleString()} goal
        </span>
      </Typography>
      <br />
      <LinearProgressBar value={(currentDonation / donationGoal) * 100} />
      <br />
      <SocialShareButton url="http://localhost:3000/" />
      <br />
      <br />
      <FullScreenDialogCustom
        handleClick={() => {
          dispatch(clearCreateDonorLoading({}));
        }}
        title="Donate"
        open={open}
        setOpen={setOpen}
        mainLayout={<DonationPage />}
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
