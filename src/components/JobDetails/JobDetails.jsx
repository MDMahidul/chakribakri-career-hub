import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../../App";
import HeaderBanner from "../HeaderBanner/HeaderBanner";

const JobDetails = () => {
  const jobs = useContext(JobContext);
  const { id } = useParams();

  // Find the job with matching id
  const matchedJob = jobs.find((job) => job.id === id);

  if (!matchedJob) {
    return <div>Loading job details...</div>;
  }

  return (
    <div>
        <HeaderBanner>Job Details</HeaderBanner>
      <div className="container mx-auto">
        <h2>{matchedJob.name}</h2>
        <p>{matchedJob.job_title}</p>
        {/* Display other job details */}
      </div>
    </div>
  );
};

export default JobDetails;
