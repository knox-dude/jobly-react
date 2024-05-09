import { BrowserRouter } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import AppRoutes from "../AppRoutes/AppRoutes";
import useLocalStorage from "@/hooks/useLocalStorage";
import CurrUserContext from "../CurrUserContext/CurrUserContext";
import { JoblyApi } from "@/api";
import { useState, useEffect } from "react";
import { User } from "@/types";
import { jwtDecode } from "jwt-decode";

type LoginParams = { username: string; password: string };
type SignupParams = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};
type decodedToken = {iat: number, username:string, isAdmin:string};

function App() {

  // retrieves token, setToken from local storage and passes it down via TokenContext
  const [token, setToken] = useLocalStorage<string | null>('jobly_token', null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // whenever token changes, try to get the current user
    async function tryToGetUser(token: string) {
      try {
        const decodedToken = jwtDecode<decodedToken>(token);
        const foundUser = await JoblyApi.getUser(decodedToken.username);
        setUser(foundUser);
      } catch (err) {
        console.error(`problem getting user: ${err}`);
        setUser(null);
      }
    }
    JoblyApi.token = token;
    (token) ? tryToGetUser(token) : setUser(null);

  }, [token]);

  // logout function, passed down through CurrUserContext
  const logout = () => {
    setToken(null);
  }

  // login function, passed down through CurrUserContext
  const login = async ({ username, password }: LoginParams) => {
    try {
      const newToken = await JoblyApi.login({username, password});
      setToken(newToken);
    } catch (err) {
      console.error(`Problem logging in in app: ${err}`);
      alert("Incorrect login");
      throw err;
    }
  }

  const signup = async ({username, firstName, lastName, password, email}: SignupParams) => {
    try {
      const newToken = await JoblyApi.signup({username, firstName, lastName, password, email});
      setToken(newToken);
    } catch (err) {
      console.error(`Problem signing up in app: ${err}`);
    }
  }


  return (
    <div className="app">
      < BrowserRouter >
        <CurrUserContext.Provider value={[user, logout, login, signup]}>
          < NavBar />
          < AppRoutes />
        </CurrUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
