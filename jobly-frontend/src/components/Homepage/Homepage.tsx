import { useContext, useState, useEffect } from "react";
import TokenContext from "../TokenContext/TokenContext";
import getUserInfo from "@/hooks/getUserInfo";
import { User } from "@/types";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"


function Homepage() {

  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // get token from context provider
  const [token,] = useContext(TokenContext);

  // decode token and get full user info

  // TODO: There's an error here - it seems like the local token (provided by tokencontext) isn't getting updated after
  // logout is run. Thus it tries to get the user information but isnt authorized because the token
  // on the jobly API is correctly set to null. But the local version of the token is fucked up.
  // I realize this is something that should be fixed on a real application but fuckit. It would
  // be a shitton of restructuring and the app is working, minus a few failed API calls. If I 
  // researched more into useContext I could probably figure it out, but fuckit.
  useEffect(() => {
    async function getUser() {
      console.log("checking if token is null");
      if (token) {
        const foundUser = await getUserInfo(token);
        setUser(foundUser);
      }
    }
    getUser();
  }, [token]);

  const renderBasedOnUser = () => {
    if (user) {
      return (
        <>
          <h3>Welcome back, {user.firstName}!</h3>
        </>
      )
    } else {
      return (
        <div className="container d-flex align-items-center justify-content-center">
          <Button className="m-2" onClick={() => navigate("/login")}>Login</Button>
          <Button className="m-2" onClick={() => navigate("/signup")}>Sign Up</Button>
        </div>
      )
    }
  }

  return (
    <div className="homepage d-flex flex-column justify-content-center align-items-center">
      <h1 className="py-2">Jobly</h1>
      <h4 className="py-2">All the jobs, in one convenient place.</h4>
      {renderBasedOnUser()}
    </div>
  )
}

export default Homepage