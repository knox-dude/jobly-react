import { useEffect, useState } from "react";
import { JoblyApi } from "@/api";
import { Company } from "@/types";
import CompanyCard from "../CompanyCard/CompanyCard";

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

  const renderCompanies = () => {
    return companies.map((company) => {
      return (
        <CompanyCard key={company.handle} {...company}></CompanyCard>
      );
    });
  };

  return (
    <div className="company-list container pt-1">
      {renderCompanies()}
    </div>
  )

}

export default CompanyList;