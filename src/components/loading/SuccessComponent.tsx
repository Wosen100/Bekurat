import Typography from "@mui/material/Typography";
import React from "react";

interface SuccessCompoentProps {
  text: string | boolean;
  type: string;
}

export default function SuccessComponent({ type, text }: SuccessCompoentProps) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontWeight: "700" }}> {text}</Typography>
        <br />
        <img
          style={{ width: type === "thankyou" ? "100%" : "25%" }}
          src={
            type === "thankyou"
              ? "http://localhost:5001/113967-thank-you.gif"
              : "http://localhost:5001/91001-success.gif"
          }
        />
      </div>
    </div>
  );
}
