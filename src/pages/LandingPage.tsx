import styles from "styled-components";

import { Link, Outlet } from 'react-router-dom';
import HeaderAndFooterWrapper from '../components/HeaderAndFooterWrapper';
import Login from "./auth/Login";
import { Grid, Typography } from "@mui/material";

const MainHeaderWrapper = styles.div`
padding-top: 100px;
h1{
    text-align: center;
}
`;

const LandingPage = () => {
    return (
        <>
            <HeaderAndFooterWrapper>
                <Grid container>
                    <Grid item xs={12}>

                   
                  <MainHeaderWrapper>
                    <h1 style={{paddingBottom:'20px'}}>
                        Welcome to <b>Asrat-Bekurat</b> <br />
                        <strong> አስራት-በኩራት  </strong>
                    </h1>
                </MainHeaderWrapper>
                </Grid>

                <Grid item xs={6} sm={5}>
                    <div style={{padding:'20px'}}>

               <Typography> Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, rem minima. Earum asperiores incidunt pariatur maxime, delectus magnam veniam unde error quia officiis hic cupiditate voluptates. Nihil perspiciatis explicabo neque.</Typography>
                    </div>
                </Grid>

                <Grid item xs={6} sm={5}>
                
                <Grid container justifyContent={"center"} flexDirection="column" alignItems={"center"}>
                    <Login />
                    <br />
                    <span> Don't have and account? <Link to="/signup"> Sign Up <br /> አካውንት ከሌለዎት፤ እዚህ ጋር ተጭነው አካውንት ይፍጠሩ:: </Link></span>
                </Grid>
                </Grid>


                </Grid>
            </HeaderAndFooterWrapper>

        </>
    )
}

export default LandingPage;