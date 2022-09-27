import React from 'react'
import axios from 'axios'
import { TextField, Typography, Button } from '@mui/material'

const formFields = [{ label: "Name", name: "name" }, { label: "Address", name: "address" },{ label: "Description", name: "description" },]

export default function RegisterBeneficiary() {

    const [beneficiaryObj, setBeneficiaryObj] = React.useState({});

    const handleChange = (e: any) => {
        setBeneficiaryObj({
            ...beneficiaryObj, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        axios.post("http://localhost:5001/beneficiary/add",{
           ...beneficiaryObj
        }).then((response)=>{
            console.log(response);
        })
        console.log(beneficiaryObj);
    }

    return (
        <div style={{ padding: "10px" }}>
            <Typography variant="h6"> Please register with your details</Typography>
            <div>
                {formFields.map((val, key) =>
                    <div key={key} style={{ paddingBottom: "5px" }}>
                        <TextField label={val.label} name={val.name} onChange={handleChange} />
                    </div>
                )}
                <Typography> Please select the profile image</Typography>
                <input type="file" name="image" onChange={handleChange} />
                <Button onClick={handleSubmit} color="primary"> Submit</Button>
            </div>
        </div>
    )
}
