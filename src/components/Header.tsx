//import '../styles/header.css'

import styles from "styled-components";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderWrapper = styles.header`
width:100%;
position: relative;
`;

const NavWrapper = styles.nav`

width:100%;
position: fixed;
margin-bottom: 80px;
background-color:gray;
    ul{
        list-style: none;
    }
    li{
        display:inline-block;
    }
    a{
        padding:10px;
        text-decoration: none;
        margin-right: 10px;
        border-radius: 5px;
        color: black;
        font-size: 16px;
    }
    a:hover, button:hover{
        background-color: rgb(77, 63, 63);
        color: white;
    }
    button {
        background-color: gray;
        padding:10px;
        text-decoration: none;
        margin-right: 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
    }
`;

const MainHeaderWrapper = styles.div`
padding-top: 100px;
h1{
    text-align: center;
}
`;
function Header() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") && setUser(true);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  return (
    <HeaderWrapper>
      <NavWrapper>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/landing">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Donors">Donors</NavLink>
          </li>
          <li>
            <NavLink to="/Donation">Donation</NavLink>
          </li>

          {user ? (
            <li>
              <NavLink to="/landing/signout">Sign Out</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/landing/signin">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/landing/signup">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </NavWrapper>

      <MainHeaderWrapper>
        <h1>
          Welcome to <strong>Asrat</strong>
        </h1>
      </MainHeaderWrapper>
    </HeaderWrapper>
  );
}

export default Header;
