import { Button, Card, Grid, Typography } from '@mui/material';
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { updateWithDonate } from '../../store/slices/beneficiarySlice';
import { createDonation } from '../../store/slices/donationSlice';
import CreditCardComponent from './donateForm/CreditCardComponent';
import DonateValueComponent from './donateForm/DonateValueComponent';
import DonerInformationForm from './donateForm/DonerInformationForm';
import styles from 'styled-components';

const MainWrapper = styles.div`
margin:0px 5%
`;

const YourInfoWrapper = styles.div`
margin-bottom:16px
`;

const SpacerDiv = styles.div`
margin-bottom:150px
`;

export interface DonateUpdateType {
  _id: string | undefined;
  donation: number;
}

export default function DonateForm() {
  const selectedBeneficiary = useSelector((state: RootState) => state.bene.selectedBeneficiary);

  const dispatch = useDispatch<AppDispatch>();
  const donor = useSelector((state: RootState) => state.donor.newDonor);

  const { name, image } = selectedBeneficiary!;
  const [isContinue, setIsConinue] = useState(false);
  const [isContinue2, setIsConinue2] = useState(false);

  const [donateValue, setDonateValue] = useState(0);

  const handleContinue = () => {
    setIsConinue(true);
  };

  const handleDonate = () => {
    dispatch(
      createDonation({
        beneficiary: selectedBeneficiary?._id,
        donor: donor?._id,
        donationAmount: donateValue,
      }),
    );
    dispatch(updateWithDonate({ _id: selectedBeneficiary?._id, donation: donateValue }));
  };

  return (
    <MainWrapper>
      <Grid sx={{ pt: 10 }} container justifyContent={'center'}>
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
                <YourInfoWrapper>
                  <Typography sx={{ pt: 2, fontWeight: 'bold' }}>Your information</Typography>
                  <DonerInformationForm isContinue={isContinue2} setIsConinue={setIsConinue2} />
                </YourInfoWrapper>
                {isContinue2 && (
                  <div>
                    <CreditCardComponent />
                    <Button
                      sx={{ mt: 3 }}
                      onClick={handleDonate}
                      variant='contained'
                      style={{
                        background: 'green',
                        bottom: '10px',
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
            <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>Your donation</Typography>
            <Typography style={{ fontSize: '20px', marginTop: '10px' }}>${donateValue}.00</Typography>
          </Card>
        </Grid>
      </Grid>
      <SpacerDiv />
    </MainWrapper>
  );
}
