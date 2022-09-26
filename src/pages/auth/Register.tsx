import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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

    if (password !== password2) {
      setError({
        error: true,
        message: "Both passwords should match",
      });
      return;
    } else {
      setError({
        error: false,
        message: "",
      });
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    const req = await fetch("http://localhost:5001/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res = await req.json();
    console.log(res);
    if (res.success) {
      setError({
        error: false,
        message: res.message,
      });

      window.location.href = "/landing/signin";
    } else {
      setError({
        error: true,
        message: res.message,
      });
    }
  };
  return (
    <div>
      <h3>Sign Up</h3>

      {error.error && <label style={{ color: "red" }}>{error.message}</label>}
      {user && <Navigate to="/dashboard" replace={true} />}
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
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
          <input
            type="password"
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Re Enter Password"
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
