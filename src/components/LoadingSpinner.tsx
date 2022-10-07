import React from "react";
// import { CSSProperties } from "react";
import { PuffLoader } from "react-spinners";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "green",
// };

export default function LoadingSpinner() {
  return <PuffLoader color="#36d7b7" size={100} />;
}
