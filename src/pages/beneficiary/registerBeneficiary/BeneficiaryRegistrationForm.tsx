import React, { SyntheticEvent } from "react";
import { TextField, Typography, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { createBeneficiary } from "../../../store/slices/beneficiarySlice";
import { AppDispatch } from "../../../store";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: #d58855;
    color: white;
  }
`;

const formFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Address", name: "address", type: "longText" },
  { label: "Short Description", name: "description", type: "text" },
  { label: "Donation Goal", name: "goal", type: "number" },
  { label: "Long Description", name: "longDescription", type: "longText" },
];

interface RegisterBeneficiaryProps {
  setOpen: Function;
}

export default function BeneficiaryRegistrationForm({
  setOpen,
}: RegisterBeneficiaryProps) {
  const [beneficiaryObj, setBeneficiaryObj] = React.useState({ image: "" });

  const [imageFile, setImageFile] = React.useState<any>();

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: any) => {
    setBeneficiaryObj({
      ...beneficiaryObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (element: HTMLInputElement) => {
    console.log(element.files);
    if (element.files) {
      setImageFile(element.files[0]);
    }
  };

  const handleUpload = () => {
    var formData = new FormData();
    formData.append("uploadFile", imageFile);
    dispatch(
      createBeneficiary({ imageFile: formData, beneficiary: beneficiaryObj })
    );
  };

  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        alignContent="center"
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Please register with your details
          </Typography>
          <br />
          <Typography variant="h5">
            You may find millions of donors who love that keeps you alive.
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            {formFields.map((val, key) =>
              val.type === "longText" ? (
                <div key={key} style={{ paddingBottom: "5px" }}>
                  <StyledTextField
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    id={val.name}
                    multiline
                    rows={4}
                    fullWidth
                    label={val.label}
                    name={val.name}
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <div key={key} style={{ paddingBottom: "5px" }}>
                  <StyledTextField
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    type={val.type === "number" ? "number" : "text"}
                    fullWidth
                    label={val.label}
                    name={val.name}
                    onChange={handleChange}
                  />
                </div>
              )
            )}
            <br />
            <Typography> Please select the profile image</Typography>
            <input
              type="file"
              name="image"
              onChange={(e: SyntheticEvent) =>
                handleFileUpload(e.currentTarget as HTMLInputElement)
              }
            />
            <Grid sx={{ pt: 4 }} justifyContent={"flex-end"} container>
              <Button onClick={() => setOpen(false)} color="primary">
                Cancel
              </Button>
              <div style={{ width: "20px" }}></div>
              <Button
                onClick={handleUpload}
                style={{ backgroundColor: "green" }}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
