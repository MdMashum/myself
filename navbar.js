import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        𝖒𝖆𝖘𝖍𝖚𝖒
      </Link>
      <ul
        className={isMobile ? "nav-link-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home nav-link">
          <li>HOME</li>
        </Link>

        <Link to="/about" className="about nav-link ">
          <li>ABOUT</li>
        </Link>

        <Link to="/service" className="service nav-link">
          <li>SERVICE</li>
        </Link>

        <Link to="/work" className="work nav-link">
          <li>WORK</li>
        </Link>

        <Link to="/contact" className="contact nav-link">
          <li>CONTACT</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
