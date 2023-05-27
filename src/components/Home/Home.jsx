import React from 'react';
import './Home.css'
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react'
import animation from '../../assets/animation.json';

const Home = () => {
    return (
      <div className=" py-5 banner-container">
        <div className="container">
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
              <Lottie
                className="mt-4"
                animationData={animation}
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;