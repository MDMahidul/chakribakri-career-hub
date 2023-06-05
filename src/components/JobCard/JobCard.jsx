import React from 'react';
import './JobCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobCard = ({job}) => {
    const { id,name, logo, job_title, category, time, location ,salary} = job;
    return (
      <div className="col ">
        <div className="card mb-3 ">
          <img className="card-img-top img-fluid" src={logo} alt="" />
          <div className="">
            <h4 className="job-title">{job_title}</h4>
            <h5 className="card-title">{name}</h5>
            <div className="d-flex gap-4 time-cat mt-4">
              <p>{category}</p>
              <p>{time}</p>
            </div>
            <div className="d-flex gap-4 loc-sal">
              <p>
                <FontAwesomeIcon className="me-2" icon={faLocationDot} />
                {location}
              </p>
              <p>
                <FontAwesomeIcon className="me-2" icon={faDollarSign} />
                Salary: {salary}
              </p>
            </div>
            <Link to={`/jobdetails/${job.id}`}>
              <Button className="my-btn" size="">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default JobCard;