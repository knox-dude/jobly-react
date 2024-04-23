import { Company } from "@/types"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JoblyApi } from "@/api";
import JobCard from "@/components/JobCard/JobCard";
import { Spinner } from "reactstrap";

function CompanyDetail() {

  const params = useParams();
  const handle = params.handle;

  if (!handle) {
    throw new Error("Invalid handle");
  }

  const [company, setCompany] = useState<Company>();

  // get job info on this company and set jobs and company state
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await JoblyApi.getCompany(handle);
        setCompany(response);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };
    fetchCompany();
  }, [handle]);

  const renderJobs = () => {
    if (!company || !company.jobs) {
      return <Spinner />;
    }
    return company?.jobs.map((job) => {
      return (
        <JobCard key={job.id} {...job}></JobCard>
      );
    });
  }

  return (
    <div className="company-detail container">
      <h1>{company?.name}</h1>
      <p>{company?.description}</p>
      <p>Employees: {company?.numEmployees}</p>
      {renderJobs()}
    </div>
  )
}

export default CompanyDetail