import React, { useContext, useState } from "react";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import AppliedCart from "../AppliedCart/AppliedCart";
import { CartContext } from "../../App";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppliedJobs = () => {
  const [cart, setCart] = useContext(CartContext);
  const [originalCart, setOriginalCart] = useState(cart);
  const navigate = useNavigate();

  const handleOnsiteJobs = () => {
    const onsiteJobs = originalCart.filter((job) => job.category === "Onsite");
    setCart(onsiteJobs);
  };

  const handleRemoteJobs = () => {
    const remoteJobs = originalCart.filter((job) => job.category === "Remote");
    setCart(remoteJobs);
  };

  return (
    <div>
      <HeaderBanner>Applied Jobs</HeaderBanner>
      <div className="container mx-auto">
        <div className="d-flex justify-content-end gap-4 mb-3">
          <Button onClick={() => handleRemoteJobs()} className="my-btn">
            Remote Jobs
          </Button>
          <Button onClick={() => handleOnsiteJobs()} className="my-btn">
            Onsite Jobs
          </Button>
        </div>
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
