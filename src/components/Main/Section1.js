import React, { useState } from "react";
import './Section1.css';
import cross from './image/cross.png';
import gift_icon from './image/gift_icon.png';
import drop_down_arrow from './image/drop_down_arrow.png'

function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container1">
        {/* Logo and Navigation (Desktop View) */}
        <div className="logo1">
          <p> <a href="/programs">Programs &nbsp;
                <img src={drop_down_arrow} alt="drop_down_arrow" />
              </a> &emsp;

              <a href="/events">Events</a> &emsp; 

              <a href="/upskills">Upskills for free &nbsp;
                <img src={drop_down_arrow} alt="drop_down_arrow" />
              </a> &emsp; 

              <a href="/review">Review</a> &emsp; 

              <a href="/job-bords">Job board</a>
          </p>
        </div>
        <div className="login">
          <div className="login-content">
            <img src={gift_icon} alt="gift_icon" className="gift_icon" />
            <a href="/login"><button className="login_button">Login</button></a>
          </div>
          <div className="signup-content"> &emsp;
            <a href="/register"><button className="signup_button">Sign up</button></a>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <button className="close-menu" onClick={toggleMenu}>
            Close &emsp; <img src={cross} alt="cross" />
          </button>
          <ul>
            <li>
              <a href="/programs">Programs </a>
            </li>
            <li><a href="/events">Events</a></li>
            <li><a href="/upskills">Upskills for free </a>
            </li>
            <li><a href="/review">Review </a></li>
            <li><a href="/job-bord">Job board</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Section1;
