import React, { useEffect } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Preston Academy of English";
  }, []);
  return (
    <>
      <div className="hero-cont">
        <div className="textImg-display">
          <p> Preston Harris Library and Museum</p>
        </div>
        <div className="hero-header">
          <h1>
            Learn <span className="blue-head">English</span> in{" "}
            <span className="red-head">Preston</span>
          </h1>
          <h1>to</h1>
          <p className="red-head">live, work and study</p>
        </div>
        <div className="hero-social">
          <a
            href="https://www.facebook.com/PrestonAcademyofEnglish"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#4267b2" }}
            className="social-icon"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/prestonacademyofenglish/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="insta-icon" />
          </a>
          <a
            href="https://x.com/Preston4English"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://wa.me/441772821039"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#25d366" }}
            className="social-icon"
          >
            <FaWhatsappSquare />
          </a>
        </div>
        <div className="hero-btn">
          <NavLink to="/contact" className="btn-hero">
            Get in Touch
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
