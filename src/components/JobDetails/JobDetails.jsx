import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";
import { JobContext,CartContext } from "../../App";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBriefcase, faSackDollar,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { addToDB } from '../../utils/fakeDB';
import toast from 'react-hot-toast';

const JobDetails = () => {
  const jobs = useContext(JobContext || []);
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart,setCart] = useContext(CartContext || []);

  // Find the job with matching id
  const job = jobs.find((job) => job.id === id);

  const handleAddToCart = job => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === job.id
    )
    if (!exists) {
      job.quantity = 1
      newCart = [...cart, job]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== job.id
      )
      toast.error('Already Applied!', { autoClose: 500 })
      return;
    }

    setCart(newCart)
    addToDB(job.id)
    toast.success('Applied Successfully!', { autoClose: 500 })
  }

  return (
    <div>
      <HeaderBanner>Job Details</HeaderBanner>
      <div className="container mx-auto py-5 my-5">
        <div className="row">
          <div className="col-md-7">
            <p className="job-details mb-4">
              <span className="title-text">Job Description: </span>
              {job.job_des}
            </p>
            <p className="job-details mb-4">
              <span className="title-text">Job Responsibility: </span>
              {job.job_res}
            </p>
            <div>
              <p className="title-text">Educational Requirements: </p>
              <p className="job-details mb-4">{job.edu_req}</p>
            </div>
            <div>
              <p className="title-text">Experiences: </p>
              <p className="job-details mb-4">{job.experience}</p>
            </div>
            
          </div>
          <div className="col-md-5">
            <div className="card details-card">
              <div className="mb-4">
                <h5 className="card-heading border-bottom border-2 pb-3">Job Details</h5>
                <div className="mt-3">    
                    <p className="details-info"><FontAwesomeIcon className="me-2 icons" size="lg" icon={faSackDollar} /><span className="fw-bold details-title">Salary: </span>{job.salary}</p>
                    <p className="details-info"><FontAwesomeIcon className="me-2 icons" size="lg" icon={faBriefcase} /><span className="fw-bold details-title">Job Title: </span>{job.job_title}</p>
                </div>
              </div>
              <div>
                <h5 className="card-heading border-bottom border-2 pb-3">Contact Information</h5>
                <div className="mt-3">    
                    <p className="details-info"><FontAwesomeIcon className="me-2 icons" size="lg" icon={faPhone} /><span className="fw-bold details-title">Phone: </span>{job.phone}</p>
                    <p className="details-info"><FontAwesomeIcon className="me-2 icons" size="lg" icon={faEnvelope} /><span className="fw-bold details-title">Email: </span>{job.email}</p>
                    <p className="details-info"><FontAwesomeIcon className="me-2 icons" size="lg" icon={faLocationDot} /><span className="fw-bold details-title">Address: </span>{job.address}</p>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
               <Button onClick={()=> handleAddToCart(job)} size="lg" className="d-grid my-btn btn block">Apply Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-5">
      <Button className="my-btn" onClick={()=>navigate(-1)}>Go Back</Button>
      </div>
    </div>
  );
};

export default JobDetails;