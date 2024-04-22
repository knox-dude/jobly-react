import { useEffect, useState } from "react"
import { JoblyApi } from "@/api"
import { Company } from "@/types";


function App() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await JoblyApi.getCompanies();
        setCompanies(response);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    }
    fetchCompanies();
  }, [])

  const renderCompanies = () => {
    return companies.map((company) => {
      return (
        <div key={company.handle}>
          <h2>{company.name}</h2>
          <p>{company.description}</p>
        </div>
      )
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          {renderCompanies()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App