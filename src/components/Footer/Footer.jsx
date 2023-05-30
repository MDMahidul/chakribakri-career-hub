import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer-section">
        <div className="container mx-auto ">
          <div className="row">
            <div className="col-md-4">
              <h4 className="footer-name">ChakriBakri</h4>
              <p className="footer-text">
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </p>
            </div>
            <div className="col-md-2">
              <h5 className="footer-subtitle">Company</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">Abot Us</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Latest News</a>
                </li>
                <li>
                  <a href="#">Carees</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="footer-subtitle">Product</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">Prototype</a>
                </li>
                <li>
                  <a href="#">Plans & Pricing</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="footer-subtitle">Support</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">Help Desk</a>
                </li>
                <li>
                  <a href="#">Sales</a>
                </li>
                <li>
                  <a href="#">Become a Partner</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              {" "}
              <h5 className="footer-subtitle">Contact</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">524 Boardway, NYC</a>
                </li>
                <li>
                  <a href="#">+1777-978-5570</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-between  border-top py-5 mt-5'>
            <p>@2023 ChakriBakri. All Rights Reserved</p>
            <p>Powered by ChakriBakri</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;