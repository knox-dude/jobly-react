import { BrowserRouter } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import AppRoutes from "../AppRoutes/AppRoutes";

function App() {

  // TODO: add retrieval of token from local storage, updating of nav based on token

  return (
    <div className="App">
      < BrowserRouter >
        < NavBar />
        < AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
