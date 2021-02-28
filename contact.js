import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <>
      <section className="contact_page">
        <div className="contain">
          <h1
            style={{
              fontSize: "2.2rem",
              color: "#fff",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Get in touch
          </h1>
          <br />{" "}
          <p>
            Please Feel Free to drop me a line,I'll get back to you as soon as i
            can.That's promise!
          </p>
        </div>

        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>r.mashum@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <i className="fas fa-phone-square-alt"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>8792859312</p>
              </div>
            </div>
            <div className="box">
              <div className="social_Icon">
                <Link
                  to={{ pathname: "https://www.facebook.com/mohd.mashum" }}
                  target="_blank"
                >
                  <i class="fab fa-facebook"></i>
                </Link>
              </div>
              <div className="social_Icon">
                <Link
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/mashum-ansari-347a87160/",
                  }}
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </Link>
              </div>
              <div className="social_Icon">
                <Link
                  to={{ pathname: "https://github.com/MdMashum" }}
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </Link>
              </div>

              <div className="text"></div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2 style={{ color: "#fff" }}>Send Message</h2>
              <div className="inputbox">
                <input type="text" name="" required="required"></input>
                <label>Full Name</label>
              </div>
              <div className="inputbox">
                <input type="text" name="" required="required"></input>
                <label>Email</label>
              </div>

              <div className="inputbox">
                <textarea required="required"></textarea>
                <label>Type your Message..</label>
              </div>
              <div className="inputbox">
                <input type="submit" name="" value="send"></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
