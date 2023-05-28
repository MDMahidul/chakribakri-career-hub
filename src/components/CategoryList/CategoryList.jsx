import React from 'react';
import './CategoryList.css'
import accounts1 from '../../assets/icons/accounts1.png';
import business1 from '../../assets/icons/business1.png';
import chip1 from '../../assets/icons/chip1.png';
import socialmedia1 from '../../assets/icons/socialmedia1.png';

const CategoryList = () => {
    return (
      <div className="container">
        <div className="text-center">
          <h3 className="section-tite">Job Category List</h3>
          <p className="section-subtite">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-3 mt-3">
            <div className="card category">
              <div className="card-body">
                <di className="card-img">
                  <img className="p-" src={accounts1} alt="" />
                </di>
                <h5 className="card-title">Account & Finance</h5>
                <p className="card-subtitle">300 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card category">
              <div className="card-body">
                <di className="card-img">
                  <img className="p-" src={business1} alt="" />
                </di>
                <h5 className="card-title">Creative Design</h5>
                <p className="card-subtitle">100+ Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card category">
              <div className="card-body">
                <di className="card-img">
                  <img className="p-" src={socialmedia1} alt="" />
                </di>
                <h5 className="card-title">Marketing & Sales</h5>
                <p className="card-subtitle">100 Jobs Available</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card category">
              <div className="card-body">
                <di className="card-img">
                  <img className="p-" src={chip1} alt="" />
                </di>
                <h5 className="card-title">Engineering Job</h5>
                <p className="card-subtitle">250 Jobs Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoryList;