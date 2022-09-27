
import React from "react";
import { Grid, Typography, Button, Card } from "@mui/material";
import HeaderAndFooterWrapper from "../components/HeaderAndFooterWrapper";
import SingleBeneficiaryCard from "../components/beneficiary/SingleBeneficiaryCard";
import FullScreenDialogCustom from "../components/common/FullScreenDialogCustom";
import RegisterBeneficiary from "./beneficiary/RegisterBeneficiary";
import axios from 'axios'

const beneficiaryList = [{
  name: "Jone Doe",
  reason: "some reason",
  address: "some address",
  image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
}, {
  name: "Maxwel Plank",
  reason: "some reason",
  address: "some address",
  image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
}, {
  name: "James Chadvik",
  reason: "some reason",
  address: "some country",
  image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
}]

const Beneficiary = () => {

  const [beneficiaryData,setBeneficiaryData]= React.useState<any[]>([]);

  React.useEffect(()=>{
    axios.get("http://localhost:5001/beneficiary/get").then((response)=>{
      console.log(response);
      setBeneficiaryData(response.data.beneficiaries)
    }).catch((e)=>{

    })
  },[])

  return <div>
    <HeaderAndFooterWrapper>
      <Grid container>
        <Grid item xs={10}>
          <Typography> Beneficiary </Typography>
        </Grid>
        <Grid item xs={2}>
          <FullScreenDialogCustom mainLayout={<RegisterBeneficiary/>}>
          <Button> Register </Button>
          </FullScreenDialogCustom>
         
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        {beneficiaryData.length>0&&beneficiaryData.map((val, key) => {
          return <Grid item xs={6} sm={4} key={key}>
            <SingleBeneficiaryCard name={val.name} reason={val.description} address={val.address} image={val.image}/>
          </Grid>
        })}
      </Grid>

    </HeaderAndFooterWrapper>
  </div>;
};

export default Beneficiary;
