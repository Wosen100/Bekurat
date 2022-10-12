import styles from "styled-components";

import { Link, NavLink, Outlet } from 'react-router-dom';
import HeaderAndFooterWrapper from '../components/HeaderAndFooterWrapper';
import Login from "./auth/Login";
import { Grid, Typography,Button } from "@mui/material";

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
                            <h1 style={{ paddingBottom: '20px' }}>
                                Welcome to <b>Asrat-Bekurat</b> <br />
                                <strong> አስራት-በኩራት  </strong>
                            </h1>
                        </MainHeaderWrapper>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <div style={{ padding: '20px' }}>

                            <Typography> Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, rem minima. Earum asperiores incidunt pariatur maxime, delectus magnam veniam unde error quia officiis hic cupiditate voluptates. Nihil perspiciatis explicabo neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam nesciunt dicta impedit, saepe eveniet provident necessitatibus error laboriosam corrupti nihil quod molestias neque, enim hic perspiciatis in! Molestias, sed!</Typography>
                           <br/>
                            <NavLink to="/beneficiaries" style={{textDecoration:"none",cursor:'pointer' }}>
                                 <button style={{backgroundColor:"green", color:"white",padding:"10px", borderRadius:'7px',cursor:'pointer', border:'none'}} >
                                Start Your Fundrasing Here!
                            </button> </NavLink>
                        </div>
                    </Grid>

                    <Grid item xs={6} sm={6}>

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