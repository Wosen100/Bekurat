import styles from "styled-components";

import { Link, Outlet } from 'react-router-dom';
import HeaderAndFooterWrapper from '../components/HeaderAndFooterWrapper';
import Login from "./auth/Login";
import { Grid } from "@mui/material";

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
                <MainHeaderWrapper>
                    <h1>
                        Welcome to <strong>Asrat-Bekurat</strong> <br />
                        <strong> አስራት-በኩራት  </strong>
                    </h1>
                </MainHeaderWrapper>
                <Grid container justifyContent={"center"} flexDirection="column" alignItems={"center"}>
                    <Login />
                    <br />
                    <span> Don't have and account? <Link to="/signup"> Sign Up <br /> አካውንት ከሌለዎት፤ እዚህ ጋር ተጭነው አካውንት ይፍጠሩ:: </Link></span>
                </Grid>
            </HeaderAndFooterWrapper>

        </>
    )
}

export default LandingPage;