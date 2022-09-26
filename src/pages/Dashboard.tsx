import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function Dashboard() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwt.decode(token);
      console.log(user);
      if (user) {
        setUser(true);
      }
    }else{
      setUser(false);
    }
  }, []);

  return <>{user ? <h1>Dashboard</h1> : <h1>Please Sign in</h1>}</>;

}

export default Dashboard;
