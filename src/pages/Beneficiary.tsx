import React from "react";
import styles from "styled-components";
import { Grid, Typography, Button } from "@mui/material";
import HeaderAndFooterWrapper from "../components/HeaderAndFooterWrapper";
import SingleBeneficiaryCard from "../components/beneficiary/SingleBeneficiaryCard";
import FullScreenDialogCustom from "../components/common/FullScreenDialogCustom";
import RegisterBeneficiary from "./beneficiary/RegisterBeneficiary";
import { useDispatch, useSelector } from "react-redux";
import bgImage from "../images/candel.jpg";
import {
  Beneficiary as BeneficiaryModel,
  clearBeneLoading,
  getBeneficiaries,
  selectBeneficiary,
} from "../store/slices/beneficiarySlice";
import { AppDispatch, RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { clearDonationLoadingStatus } from "../store/slices/donationSlice";

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

const BeneficiaryCardDiv = styles.div`
box-shadow: rgb(0 1 10 / 5%) 0px 5px 10px;
background: #FFF;
border-radius: 1rem;
border: 2px solid green;
margin-bottom: 40px;
height: 100%;
margin: 10px;
`;

const Beneficiary = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const beneficiaryList = useSelector(
    (state: RootState) => state.bene.beneficiaryList
  );

  const handleOpen = (openValue: boolean) => {
    setOpen(openValue);
    dispatch(clearBeneLoading({}));
  };

  React.useEffect(() => {
    dispatch(getBeneficiaries());
  }, [dispatch]);

  const handleSelect = (beneficiary: BeneficiaryModel) => {
    dispatch(selectBeneficiary(beneficiary));
    dispatch(clearDonationLoadingStatus({}));
    navigate("/beneficiaries/details");
  };

  return (
    <MainBgDiv>
      <MainInnerDiv>
        <HeaderAndFooterWrapper>
          <Grid container>
            <Grid item xs={10}>
              <Typography> Beneficiary </Typography>
            </Grid>
            <Grid item xs={2}>
              <FullScreenDialogCustom
                handleClick={() => {}}
                open={open}
                setOpen={handleOpen}
                title="Register New Beneficiary"
                mainLayout={<RegisterBeneficiary setOpen={setOpen} />}
              >
                <Button style={{ backgroundColor: "green", color: "white" }}>
                  {" "}
                  Register{" "}
                </Button>
              </FullScreenDialogCustom>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ marginTop: "20px" }}
          >
            {beneficiaryList.length > 0 &&
              beneficiaryList.map((val, key) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={key}
                    onClick={() => handleSelect(val)}
                  >
                    <BeneficiaryCardDiv>
                      <SingleBeneficiaryCard
                        name={val.name}
                        reason={val.description}
                        address={val.address}
                        image={val.image}
                        currentDonation={val.curren_donation}
                        donationGoal={val.donation_goal}
                      />
                    </BeneficiaryCardDiv>
                  </Grid>
                );
              })}
          </Grid>
        </HeaderAndFooterWrapper>
        <br />
        <br />
        <br />
        <br />
      </MainInnerDiv>
    </MainBgDiv>
  );
};

export default Beneficiary;
