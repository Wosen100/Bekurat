import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { createDonation } from "../../store/slices/donationSlice";
import CreditCardComponent from "./donateForm/CreditCardComponent";
import DonateValueComponent from "./donateForm/DonateValueComponent";
import DonerInformationForm from "./donateForm/DonerInformationForm";

export default function DonateForm() {
  const selectedBeneficiary = useSelector(
    (state: RootState) => state.bene.selectedBeneficiary
  );

  const dispatch = useDispatch<AppDispatch>();
  const donor = useSelector((state: RootState) => state.donor.newDonor);

  console.log(selectedBeneficiary?._id);
  console.log(donor?._id);

  const { name, image } = selectedBeneficiary!;
  const [isContinue, setIsConinue] = React.useState(false);
  const [isContinue2, setIsConinue2] = React.useState(false);

  const [donateValue, setDonateValue] = React.useState(0);

  const handleContinue = () => {
    setIsConinue(true);
  };

  const handleDonate = () => {
    console.log(donor?._id);
    console.log(selectedBeneficiary?._id);
    dispatch(
      createDonation({
        beneficiary: selectedBeneficiary?._id,
        donor: donor?._id,
        donationAmount: donateValue,
      })
    );
  };

  return (
    <div style={{ margin: "0px 5%" }}>
      <Grid sx={{ pt: 10 }} container justifyContent={"center"}>
        <Grid item container xs={6}>
          <Card sx={{ p: 3 }}>
            <DonateValueComponent
              handleContinue={handleContinue}
              name={name}
              image={image}
              isContinue={isContinue}
              isEnabled={donateValue > 0}
              setDonateValue={setDonateValue}
            />
            {isContinue && (
              <div>
                <hr />
                <br />
                <Typography>
                  <b>Your information </b>
                </Typography>
                <DonerInformationForm
                  isContinue={isContinue2}
                  setIsConinue={setIsConinue2}
                />

                <br />
                {isContinue2 && (
                  <div>
                    <CreditCardComponent />
                    <br />
                    <br />
                    <Button
                      onClick={handleDonate}
                      variant="contained"
                      style={{
                        background: "green",
                        bottom: "10px",
                      }}
                    >
                      Donate
                    </Button>
                  </div>
                )}
              </div>
            )}
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card sx={{ p: 2, mx: 2 }}>
            <Typography style={{ fontSize: "20px" }}>
              <b> Your donation</b>
            </Typography>
            <Typography> {donateValue}</Typography>
          </Card>
        </Grid>
      </Grid>
      <div style={{ marginBottom: "150px" }}></div>
    </div>
  );
}
