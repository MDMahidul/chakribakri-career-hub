import React from "react";
import "./AppliedCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppliedCart = ({ job }) => {
  const { id, job_title, logo, name, category, location, salary, time } = job;

  return (
    <div>
      <div className="card mb-4">
        <div className="row d-flex justify-content-end align-items-center">
          <div className="col-md-4">
            <div className="logo-sec text-center align-self-center">
              <img className="w-75 py-4" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-6">
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
          </div>
          <div className="col-md-2">
            <Link to={`/jobdetails/${job.id}`}>
              <Button className="my-btn" size="">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedCart;
