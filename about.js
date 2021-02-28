import React from "react";
import "./about.css";
import dp from "../assets/Dp.jpg";

const about = () => {
  return (
    <>
      <section id="about">
        <div className="inner-width">
          <h1 className="section-title">About</h1>
          <div className="about-content">
            <img src={dp} alt="" className="about-pic" />
            <div className="about-text">
              <h2>Hi! I'm Md Mashum</h2>
              <h3>
                <span>MERN Stack Developer</span>
                <span>Website Developer</span>
                <span>Responsive Website</span>
                <span>Designer</span>
              </h3>
              <p>
                A self-motivated person who believes in growth and very open to
                new ideas. I am looking for the place where my skills and
                expertise is being fully utilized and proved to be an asset to
                the company. I am always fascinated towards continuous learning
                process and capable of working in a team.
              </p>
            </div>
          </div>

          <div className="skills">
            <div className="skill">
              <div className="skill-info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="skill-bar html"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div className="skill-bar css"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>React Js</span>
                <span>80%</span>
              </div>
              <div className="skill-bar css"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>MySQL</span>
                <span>90%</span>
              </div>
              <div className="skill-bar mysql"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
