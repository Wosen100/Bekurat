import styles from 'styled-components';
import { Grid, Typography } from '@mui/material';
import bgImage from '../images/candel.jpg';
import { useSelector } from 'react-redux';
import HeaderAndFooterWrapper from '../components/HeaderAndFooterWrapper';
import { RootState } from '../store';
import DonateCard from './beneficiaryDetails/DonateCard';

const MainBgDiv = styles.div`
background-image:url(${bgImage});
width:100vw;
height:100vh;
position:fixed;
background-size:cover;
background-repeat:no-repeat;
`;

const MainInnerDiv = styles.div`
  position:absolute;
  width:100vw;
  overflow:scroll;
  height:100%;
  
`;

const DescriptionDiv = styles.div`
background-color: #d58855;
color: white;
margin-top: 30px;
padding: 20px;
`;

const DonateCardWrapper = styles.div`
marginTop:10px;
`;

export default function BeneficiaryDetails() {
  const selectedBeneficiary = useSelector((state: RootState) => state.bene.selectedBeneficiary);

  const { name, image, description, donation_goal, curren_donation } = selectedBeneficiary!;

  return (
    <MainBgDiv>
      <MainInnerDiv>
        <HeaderAndFooterWrapper>
          <div style={{ padding: '60px 100px' }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography style={{ fontWeight: 'bold', color: 'white' }} variant={'h4'}>
                  {name}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <img src={image} style={{ width: '100%', marginTop: '10px' }} alt={name} />

                <DescriptionDiv>
                  <Typography>{description}</Typography>
                </DescriptionDiv>
              </Grid>
              <Grid item xs={12} sm={4}>
                <DonateCardWrapper>
                  <DonateCard currentDonation={curren_donation} donationGoal={donation_goal} title={name} />
                </DonateCardWrapper>
              </Grid>
            </Grid>
          </div>
        </HeaderAndFooterWrapper>
      </MainInnerDiv>
    </MainBgDiv>
  );
}
