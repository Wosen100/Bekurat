import styles from 'styled-components';
import bgImage from '../images/candel.jpg';
import { Link, NavLink } from 'react-router-dom';
import HeaderAndFooterWrapper from '../components/HeaderAndFooterWrapper';
import Login from './auth/Login';
import { Grid, Typography } from '@mui/material';

const MainHeaderWrapper = styles.div`
  padding-top: 100px;
  h1 {
    text-align: center;
    padding-bottom:20px;
}
`;

const FundButton = styles.button`
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  border: none;
`;

const DescriptionDiv = styles.div`
  margin-left:20px;
  padding:20px;
  background-color: #d58855;
  color: white;
  padding: 20px;
`;

const MainBgDiv = styles.div`
  background-image:url(${bgImage});
  height:100vh;
  background-size:cover;
  background-repeat:no-repeat;
`;

export default function LandingPage() {
  return (
    <MainBgDiv>
      <HeaderAndFooterWrapper>
        <Grid container>
          <Grid item xs={12}>
            <MainHeaderWrapper>
              <h1>
                Welcome to <b>Asrat-Bekurat</b> <br />
                <strong> አስራት-በኩራት </strong>
              </h1>
            </MainHeaderWrapper>
          </Grid>

          <Grid item xs={6} sm={6}>
            <DescriptionDiv>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, rem minima. Earum asperiores incidunt
                pariatur maxime, delectus magnam veniam unde error quia officiis hic cupiditate voluptates. Nihil
                perspiciatis explicabo neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam
                nesciunt dicta impedit, saepe eveniet provident necessitatibus error laboriosam corrupti nihil quod
                molestias neque, enim hic perspiciatis in! Molestias, sed!
              </Typography>
              <br />
              <NavLink to='/beneficiaries' style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <FundButton>Start Your Fundrasing Here!</FundButton>{' '}
              </NavLink>
            </DescriptionDiv>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Grid container justifyContent={'center'} flexDirection='column' alignItems={'center'}>
              <Login />
              <br />
              <span>
                {' '}
                Don't have and account?{' '}
                <Link to='/signup'>
                  {' '}
                  Sign Up <br /> አካውንት ከሌለዎት፤ እዚህ ጋር ተጭነው አካውንት ይፍጠሩ::{' '}
                </Link>
              </span>
            </Grid>
          </Grid>
        </Grid>
      </HeaderAndFooterWrapper>
    </MainBgDiv>
  );
}
