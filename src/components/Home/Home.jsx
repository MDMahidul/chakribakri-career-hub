import React, { useContext } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../assets/animation.json";
import CategoryList from "../CategoryList/CategoryList";
import Jobs from "../Jobs/Jobs";
import { JobContext } from "../../App";

const Home = () => {
  const jobs = useContext(JobContext);
  /*  const [cart,setCart] = useContext(CartContext); */

  return (
    <div className="">
      <div className="banner-container py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <h1 className="banner-title">
                One Step <br></br>Closer To Your <br></br>
                <span>Dream Job</span>
              </h1>
              <p className="banner-subtitle">
                Finding your dream job is an exciting journey, and every step
                you take brings you closer to achieving it. Whether you're a
                recent graduate or seeking a career change, each action you take
                brings you closer to realizing your aspirations.{" "}
              </p>
              <Link to="#">
                <Button className="my-btn" size="">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="col-md-6">
              <Lottie className="mt-4" animationData={animation} loop={true} />
            </div>
          </div>
        </div>
      </div>
      <CategoryList />
      <div className="container mx-auto row">
        <div className="text-center mb-3">
          <h3 className="section-tite">Featured Jobs</h3>
          <p className="section-subtite">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <Jobs></Jobs>
      </div>
    </div>
  );
};

export default Home;
