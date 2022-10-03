import { TextField, Button } from "@mui/material";
import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { createNewDonor } from "../../../store/slices/donorSlice";

const formFields = [
  { label: "First Name", name: "fName", type: "text" },
  { label: "Last Name", name: "lName", type: "text" },
  { label: "Email address", name: "email", type: "email" },
  { label: "Postal code", name: "postalCode", type: "text" },
];

interface DonerInfoProp {
  isContinue: boolean;
  setIsConinue: Function;
}

export default function DonerInformationForm({
  isContinue,
  setIsConinue,
}: DonerInfoProp) {
  const [donerObj, setDonerObj] = React.useState({});

  const [country, setCountry] = React.useState("");

  const dispath = useDispatch<AppDispatch>();

  const handleChange = (e: any) => {
    setDonerObj({
      ...donerObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitData = () => {
    dispath(createNewDonor({ ...donerObj, country: country }));
    setIsConinue(true);
  };

  return (
    <div
      style={{
        // border: "2px solid green",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <br />

      {formFields.map((val, key) => (
        <div key={key} style={{ paddingBottom: "5px" }}>
          <TextField
            fullWidth
            label={val.label}
            name={val.name}
            onChange={handleChange}
          />
        </div>
      ))}
      <CountryDropdown
        value={country}
        onChange={(value) => setCountry(value)}
      />

      {!isContinue && (
        <div>
          <br />
          <Button
            onClick={handleSubmitData}
            variant="contained"
            style={{
              background: "green",
              bottom: "10px",
            }}
          >
            Continue
          </Button>
          <br />
        </div>
      )}
    </div>
  );
}
