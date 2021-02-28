import React from "react";
import "./work.css";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import { Link } from "react-router-dom";

const work = () => {
  return (
    <>
      <section id="education">
        <div className="inner-width">
          <h1 className="section-title">Education & Experiences</h1>
          <div className="time-line">
            <div className="block">
              <h4>2007 - 2008</h4>
              <h3>Matriculation</h3>
              <p>
                I Completed my matriculation in CBSE Board With Science Stream
                in 2008.
              </p>
            </div>

            <div className="block">
              <h4>2008 - 2010</h4>
              <h3>Intermediate</h3>
              <p>
                I Completed my Intermediate in CBSE Board With Science Stream in
                2010.
              </p>
            </div>

            <div className="block">
              <h4>2010 - 2014</h4>
              <h3>B-Tech In Computer Science</h3>
              <p>
                I Completed my B-Tech in MDU, Rohtak With Computer Science in
                2014.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="dark">
        <div className="inner-width">
          <h1 className="section-title">Works</h1>
          <div className="works">
            {/*  <a href="./" className="working">
         <img src={image1} alt="Project A" />
         
          <div className="info">
            <h3>Project A</h3>
            <div className="cat">Music, Headset</div>
          </div>
        </a>
        
        <a href={image2} className="working">
          <img src={image2} alt=""/>
          <div className="info">
            <h3>Working Title</h3>
            <div className="cat">Music, Headset</div>
          </div>
        </a>

        <a href="https://www.google.com/" className="working">
          <img src={image3} alt=""/>
          <div className="info">
            <h3>Working Title</h3>
            <div className="cat">Music, Headset</div>
          </div>
        </a>

        <a href={image4}className="working">
          <img src={image4} alt=""/>
          <div className="info">
            <h3>Working Title</h3>
            <div className="cat">Music, Headset</div>
          </div>
        </a>

        <a href={image5} className="working">
          <img src={image5} alt=""/>
          <div className="info">
            <h3>Working Title</h3>
            <div className="cat">Music, Headset</div>
          </div>
        </a>

        <a href={image6} className="working">
          <img src={image6} alt=""/>
          <div className="info">
            <h3>Working Title</h3>
            <div className="cat">Music, Headset</div>
          </div>
        </a>



*/}

            <ul className="timeline">
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">SourceOne Management Pvt Ltd</span>
                    <span className="time-wrapper">
                      <span className="time"> 2015 - 2016</span>
                    </span>
                  </div>
                  <div className="desc">
                    My project name is hiringNow.com and I Developed Full
                    responsive website
                    <p>and i used a Html , Css and JavaScript.</p>
                    <p>
                      My Sql was using to save and create the data. <br />
                      <Link
                        style={{
                          color: "#fff",
                          padding: "4px",
                          fontSize: "1rem",
                        }}
                        to={{ pathname: "https://www.hiringnow.com/" }}
                        target="_blank"
                      >
                        <u>www.hiringNow.com</u>
                      </Link>
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">FreeLance.</span>
                    <span className="time-wrapper">
                      <span className="time">2017 - 2018</span>
                    </span>
                  </div>
                  <div className="desc left-contain">
                    Design the responsive Website.
                    <p>
                      I developed the responsive website and deploy the website
                      on Server.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">HelloDeliveri.com</span>
                    <span className="time-wrapper">
                      <span className="time">2020 - 2021</span>
                    </span>
                  </div>
                  <div className="desc">
                    I developed the responsive website and deploy the website on
                    Server.
                    <br />
                    <Link
                      style={{
                        color: "#fff",
                        padding: "4px",
                        fontSize: "1rem",
                      }}
                      to={{ pathname: "http://www.hellodeliveri.com/" }}
                    >
                      www.hellodeliveri.com
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default work;
