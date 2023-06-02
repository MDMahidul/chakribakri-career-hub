import React, { useContext,useState } from "react";
import JobCart from '../JobCart/JobCart'
import { JobContext } from "../../App";
import { Button } from "react-bootstrap";

const Jobs = ({job}) => {

  const jobs = useContext(JobContext);
  const [showAll, setShowAll] = useState(false);
  /*  const [cart,setCart] = useContext(CartContext); */
  
  const displayJobs = showAll ? jobs : jobs.slice(0,4);

  const habdleShowAll = ()=>{
    setShowAll(true);
  }
  return (
    <div className="container mx-auto mb-5 pb-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {displayJobs.map((job) => (
          <JobCart key={job.id} job={job}></JobCart>
        ))}
      </div>
      {!showAll && (
        <div className="text-center">
          <Button className="my-btn mt-3" onClick={habdleShowAll}>
            Show All Jobs
          </Button>
        </div>
      )}
    </div>
  );
};

export default Jobs;