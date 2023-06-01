import React from "react";
import JobCart from '../JobCart/JobCart'

const Jobs = ({job}) => {


  /*  const [cart,setCart] = useContext(CartContext); */

  return (
    <div className="container mx-auto">
        <JobCart key={job.id} job={job}></JobCart>
    </div>
  );
};

export default Jobs;