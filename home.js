import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";
import About from "./about";
import Service from "./service";
import Work from "./work";
import Contact from "./contact";
import Footer from "./Footer";

function home() {
  return (
    <>
      <section id="home">
        <div className="inner-width">
          <div className="content">
            <h2>Hi, I'm Mohd Mashum</h2>
            <h1>and I'm </h1>
            <div className="sm">
              <Link
                target="_blank"
                to={{ pathname: "https://www.facebook.com/mohd.mashum" }}
                className="fab fa-facebook-f"
              ></Link>
              <Link
                to={{ pathname: "https://twitter.com/_700_2020" }}
                target="_blank"
                className="fab fa-twitter"
              ></Link>
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/mashum-ansari-347a87160/",
                }}
                target="_blank"
                className="fab fa-linkedin-in"
              ></Link>
              <Link
                to={{ pathname: "https://github.com/MdMashum" }}
                className="fab fa-github"
                target="_blank"
              ></Link>
            </div>
            <div className="buttons">
              <Link to="/contact">Contact me</Link>
              <Link to="../Md.MASHUM.pdf" target="_blank">
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Work />
      <Contact />
    </>
  );
}

export default home;
