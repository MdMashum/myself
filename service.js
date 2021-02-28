import React from "react";
import "./service.css";
import Footer from "./Footer";

const service = () => {
  return (
    <>
      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">Our Services</h1>
          <div className="border"></div>
          <div className="services-container">
            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="service-title">MERN Stack Developer</div>
              <div className="service-desc">
                Developing the website with the help of Mern Stack Developer
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="service-title">Web Development</div>
              <div className="service-desc">
                Developing the website with Deploy on the server
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-brush"></i>
              </div>
              <div className="service-title">Responsive Designs</div>
              <div className="service-desc">
                Full responsive website with all supported device.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-database"></i>
              </div>
              <div className="service-title">Databases</div>
              <div className="service-desc">
                using the MySql to create a table on the basic of client use.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-object-ungroup"></i>
              </div>
              <div className="service-title">Website Designs</div>
              <div className="service-desc">
                Design a website for full stack developer.And responsive website
                on every device.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <div className="service-title">Website Deploy</div>
              <div className="service-desc">
                The website deployment on the server with full stack
                Development.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default service;
