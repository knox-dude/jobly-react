import { useEffect, useState } from "react";
import { JoblyApi } from "@/api";
import { Job } from "@/types";
import SearchBox from "@/components/SearchBox/SearchBox";
import JobCard from "../JobCard/JobCard";

function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);

  // get a list of all jobs on page load
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await JoblyApi.getJobs();
        setJobs(response);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  // handle when user searches for a job
  const handleSearch = async (searchText: string) => {
    try {
      let response;
      if (searchText === "") {
        response = await JoblyApi.getJobs();
      } else {
        response = await JoblyApi.searchJobs(searchText);
      }
      setJobs(response);
    } catch (error) {
      console.error("Error searching jobs:", error);
    }
  };

  // renders jobs or message when there are no jobs
  const renderJobs = () => {
    if (jobs.length === 0) {
      return <h4 className="text-center pt-4">Couldn't find any jobs</h4>
    }
    return jobs.map((job) => {
      return (
        <JobCard key={job.id} {...job}></JobCard>
      );
    });
  };

  return (
    <div className="job-list container pt-1">
      <SearchBox handleSearch={handleSearch} />
      {renderJobs()}
    </div>
  )

}

export default JobList;