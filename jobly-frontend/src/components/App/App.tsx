import { BrowserRouter } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import AppRoutes from "../AppRoutes/AppRoutes";
import useLocalStorage from "@/hooks/useLocalStorage";
import TokenContext from "../TokenContext/TokenContext";

function App() {

  // retrieves token, setToken from local storage and passes it down via TokenContext
  const [token, setToken] = useLocalStorage<string | null>('jobly_token', null);

  return (
    <TokenContext.Provider value={[token, setToken]}>
      <div className="App">
        < BrowserRouter >
          < NavBar />
          < AppRoutes />
        </BrowserRouter>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
