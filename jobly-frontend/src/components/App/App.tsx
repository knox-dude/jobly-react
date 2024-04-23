import { BrowserRouter } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import AppRoutes from "../AppRoutes/AppRoutes";

function App() {
  return (
    <div className="App">
      < BrowserRouter>
      < NavBar />
      < AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
