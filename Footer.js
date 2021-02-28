import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Mashum<span></span>
          </h3>
          <p class="footer-links">
            I have above 4 year Experience in Software Engineer. <br />
            and Now i am working on freelence.
          </p>
          <p class="footer-company-name">Md Mashum &copy; 2020</p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Greater Noida,</span> Delhi Ncr, India
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>+91 8792859312</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:r.mashum@gmail.com">r.mashum@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About Me</span>A self-motivated person who believes in growth
            and very open to new ideas.
          </p>

          <div class="footer-icons">
            <Link
              to={{ pathname: "https://www.facebook.com/mohd.mashum" }}
              target="_blank"
            >
              <i class="fab fa-facebook"></i>
            </Link>
            <Link
              to={{ pathname: "https://twitter.com/_700_2020" }}
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </Link>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/mashum-ansari-347a87160/",
              }}
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </Link>
            <Link
              to={{ pathname: "https://github.com/MdMashum" }}
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
