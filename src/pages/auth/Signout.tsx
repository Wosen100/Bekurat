import React, { useEffect } from "react";

type Props = {};

const Signout = (props: Props) => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location.href = "/landing/signin";
  }, []);

  return <div>You have been Signed out</div>;
};

export default Signout;
