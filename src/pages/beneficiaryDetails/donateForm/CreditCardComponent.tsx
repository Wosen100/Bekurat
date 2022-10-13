import React from "react";
import ReactCreditCard from "@repay/react-credit-card";
import "@repay/react-credit-card/dist/react-credit-card.css";
import { Typography } from "@mui/material";

const formFields = [
  { label: "Card number", name: "cardnumber", type: "number" },
  { label: "MM/YY", name: "monthYear", type: "text" },
];

export default function CreditCardComponent() {
  const [values, setValues] = React.useState({
    name: "",
    number: "",
    expiration: "",
    cvc: "",
  });
  const handleChange = React.useCallback(
    (event: any) => {
      const { name, value } = event.target;
      setValues((v) => ({ ...v, [name]: value }));
    },
    [setValues]
  );

  const [focused, setFocus] = React.useState<any | undefined>(undefined);
  const handleFocus = React.useCallback(
    (event: any) => setFocus(event.target.name as any),
    [setFocus]
  );
  const handleBlur = React.useCallback(() => setFocus(undefined), [setFocus]);

  return (
    <form>
      <div
        style={
          {
            // border: "2px solid green",
            // padding: "20px",
            // borderRadius: "20px",
          }
        }
      >
        <Typography>
          <b>Credit or debit </b>
        </Typography>
        <br />
        <fieldset
          style={{
            border: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>Name on card</label>
          <input
            data-testid="nameonthcard"
            name="name"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.name}
          />
        </fieldset>
        <fieldset
          style={{
            border: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>Card Number</label>
          <input
            data-testid="cardnumber"
            name="number"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.number}
          />
        </fieldset>
        <fieldset
          style={{
            border: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>Expiration</label>
          <input
            data-testid="expiration"
            name="expiration"
            placeholder="MM/YY"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.expiration}
          />
        </fieldset>
        <fieldset
          style={{
            marginBottom: "20px",
            border: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>CVC</label>
          <input
            data-testid="cvc"
            name="cvc"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.cvc}
          />
        </fieldset>
        <ReactCreditCard {...values} focused={focused} />
      </div>
    </form>
  );
}
