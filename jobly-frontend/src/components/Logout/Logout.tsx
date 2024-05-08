import TokenContext from "../TokenContext/TokenContext"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Spinner } from "reactstrap";
import { JoblyApi } from "@/api";

function Logout() {
  const navigate = useNavigate();
  const [, setToken] = useContext(TokenContext);

  useEffect(() => {
    async function logoutUser() {
      console.log('set token to null');
      setToken(null);
      await JoblyApi.logout();
      navigate("/");
    }
    logoutUser();
  });

  return (
    <Spinner color="primary" />
  )
}

export default Logout