import React from 'react'
import { Card, Typography, Grid } from '@mui/material'

export default function SingleBeneficiaryCard(prop: any) {

    return (
        <Card sx={{ p: 2 }}>
            <Grid container>
                <Grid item xs={8}>
                    <Typography style={{ color: 'purple' }}><b>
                        {prop.name}
                    </b></Typography>
                </Grid>
                <Grid item xs={4}>
                        <img src={prop.image} style={{width:'50%'}}/>
                </Grid>
            </Grid>

            <hr />
            <SingleKeyValueTypography name={"Because of"} value={prop.reason} />
            <SingleKeyValueTypography name={"Living in"} value={prop.address} />

        </Card>
    )
}


const SingleKeyValueTypography = (prop: any) => {
    return <Typography> <span style={{ color: 'gray' }}>{prop.name} </span>{prop.value}</Typography>
}