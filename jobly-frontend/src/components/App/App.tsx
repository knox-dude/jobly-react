import { useEffect, useState } from "react";
import { JoblyApi } from "@/api";
import { Company } from "@/types";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import AppRoutes from "../AppRoutes/AppRoutes";

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await JoblyApi.getCompanies();
        setCompanies(response);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies();
  }, []);

  const renderCompanies = () => {
    return companies.map((company) => {
      return (
        <div key={company.handle}>
          <h2>{company.name}</h2>
          <p>{company.description}</p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      < BrowserRouter>
      < NavBar />
      < AppRoutes />
        <header className="App-header">
          <p>{renderCompanies()}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
