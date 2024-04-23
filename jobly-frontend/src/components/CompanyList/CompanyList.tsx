import { useEffect, useState } from "react";
import { JoblyApi } from "@/api";
import { Company } from "@/types";
import CompanyCard from "@/components/CompanyCard/CompanyCard";
import SearchBox from "@/components/SearchBox/SearchBox";

function CompanyList() {
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

  const handleSearch = async (searchText: string) => {
    try {
      const response = await JoblyApi.searchCompanies(searchText);
      setCompanies(response);
    } catch (error) {
      console.error("Error searching companies:", error);
    }
  };

  const renderCompanies = () => {
    return companies.map((company) => {
      return (
        <CompanyCard key={company.handle} {...company}></CompanyCard>
      );
    });
  };

  return (
    <div className="company-list container pt-1">
      <SearchBox handleSearch={handleSearch} />
      {renderCompanies()}
    </div>
  )

}

export default CompanyList;