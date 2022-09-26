import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`

h3{
  text-align:center
}

form{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  gap: 0.75em;
}

input{
  padding:12px;
}

button {
  padding: 12px 24px;
  background: yellow;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 12px;

}

`

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") && setUser(true);
  }, []);

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const submitHandler = async (event: any) => {
    event.preventDefault();
    setError({
      error: false,
      message: "",
    });
    const user = {
      email,
      password,
    };

    const req = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res = await req.json();
    if (res.success) {
      localStorage.setItem("token", res.token);
      console.log(res);
      setUser(true);
    } else {
      setError({
        error: true,
        message: res.message,
      });
      return;
    }
  };

  return (
    <div>
      <FormWrapper className="form-container">
      <h3>Sign In</h3>

      {error.error && <label style={{ color: "red" }}>{error.message}</label>}
      {user && <Navigate to="/dashboard" replace={true} />}
        <form onSubmit={submitHandler}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button>Sign In</button>
        </form>
      </FormWrapper>
    </div>
  );
};

export default Login;
