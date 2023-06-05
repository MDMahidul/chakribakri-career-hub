import React, { useContext } from "react";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import AppliedCart from "../AppliedCart/AppliedCart";
import { CartContext } from "../../App";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppliedJobs = () => {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <HeaderBanner>Applied Jobs</HeaderBanner>
      <div className="container mx-auto">
        {cart.map((job) => (
          <AppliedCart key={job.id} job={job}></AppliedCart>
        ))}
      </div>
      <div className="text-center pb-5">
        <Button className="my-btn" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default AppliedJobs;
