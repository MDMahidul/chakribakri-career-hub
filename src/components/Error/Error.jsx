import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error = () => {
    const { error, status } = useRouteError();
    return (
      <div className="container mx-auto text-center">
        <div className="text-center mt-5">
          <img
            className="w-25"
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1685727677~exp=1685728277~hmac=4f9cff3864053d3e6901040a61d963f81e34b6c2172b3e09a245283f303ffd86"
            alt=""
          />
        </div>
        <div>
          <h4 className="fw-bold my-4 text-danger"> {status || 404}</h4>
          <h4 className="fw-bold my-4 text-danger"> {error?.message}</h4>
        </div>
        <Link to="/">
          <Button className="my-btn">Back to homepage</Button>
        </Link>
      </div>
    );
};

export default Error;