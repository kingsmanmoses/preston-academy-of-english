// TODO: ALso Add link for the partnership
import React from "react";
import Logo from "../../assets/img/logo.png";
import { FaCopyright, FaLocationDot } from "react-icons/fa6";
import { FaInfo, FaMailBulk, FaMapMarkedAlt, FaPenAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import "./footer.css";
//! To import  footer about preston images
import Res from "../../assets/img/restur.jpg";
import Outdoor from "../../assets/img/outdoor.jpg";
import pres from "../../assets/img/pres (1).jpg";
import pres2 from "../../assets/img/pres (2).jpg";
import pres3 from "../../assets/img/pres (3).jpg";
import pres4 from "../../assets/img/pres (4).jpg";
import pres5 from "../../assets/img/pres (5).jpg";
import pres6 from "../../assets/img/pres (6).jpg";
import Online from "../../assets/img/online.png";
import Partner from "../../assets/img/partner.png";
import British from "../../assets/img/british.JPG";
import Member from "../../assets/img/member.png";
import { NavLink } from "react-router-dom";

const PartnerData = [
  {
    IconImg: Online,
  },
  {
    IconImg: Partner,
  },
  {
    IconImg: British,
  },
];

const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="footer-details">
        {/* //! For about us */}
        <div className="detail-box">
          <div className="icon-boxDetails">
            <div className="icon-box">
              <FaPenAlt className="footer-icon" />
            </div>
            <p className="">About Us</p>
          </div>
          <div className="foot-detail">
            <p className="foot-para">
              <FaLocationDot className="detail-icon" /> 93 Lancaster Rd, Preston
              PR1 2QJ
            </p>
            <p className="foot-para">
              <BsFillTelephoneFill className="detail-icon" /> + 441772 821039
            </p>
            <p className="foot-para">
              <FaMailBulk className="detail-icon" />{" "}
              info@prestonacademyofenglish.com
            </p>
          </div>
        </div>
        {/* //! For About Preston */}
        <div className="detail-box">
          <div className="icon-boxDetails">
            <div className="icon-box">
              <FaMapMarkedAlt className="footer-icon" />
            </div>
            <p className="">About Preston</p>
          </div>
          <div className="foot-detail">
            <NavLink to="/about-preston" className="foot-para" href="/">
              <div className="preston-img">
                <img src={Res} alt="" />
              </div>
              <p className="">Restaurants in Preston</p>
            </NavLink>
            <NavLink to="/about-preston" className="foot-para" href="/">
              <div className="preston-img">
                <img src={Outdoor} alt="" />
              </div>
              <p className="">More information about Preston</p>
            </NavLink>
          </div>
        </div>
        {/* //! Fpr more information */}
        <div className="detail-box">
          <div className="icon-boxDetails">
            <div className="icon-box">
              <FaInfo className="footer-icon" />
            </div>
            <p className="">More Information</p>
          </div>
          <div className="foot-detail">
            <NavLink to="/courses" className="foot-para">
              Courses
            </NavLink>
            <NavLink to="/contact" className="foot-para">
              Contact
            </NavLink>
            <NavLink
              to="/about-preston-academy-of-english"
              className="foot-para"
            >
              About us
            </NavLink>
            <NavLink to="/ukvi" className="foot-para">
              UKVI English Exams
            </NavLink>
          </div>
        </div>
        {/* //! For social media */}
        <div className="detail-box">
          <div className="icon-boxDetails">
            <div className="icon-box">
              <GrGallery className="footer-icon" />
            </div>
            <p className="">Social Media</p>
          </div>
          <div className="foot-detail">
            <a
              href="https://www.facebook.com/PrestonAcademyofEnglish/"
              target="_blank"
              rel="noreferrer"
              className="foot-social"
            >
              <img src={pres} alt="pres" />
              <img src={pres2} alt="pres" />
              <img src={pres3} alt="pres" />
              <img src={pres4} alt="pres" />
              <img src={pres5} alt="pres" />
              <img src={pres6} alt="pres" />
            </a>
            <div className="foot-iconSocialBox">
              <a
                href="https://www.facebook.com/PrestonAcademyofEnglish/"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <FaFacebookSquare className="social-iconFoot" />
              </a>
              <a
                href="https://www.instagram.com/prestonacademy?igsh=MXB1MnRobzA5ZHBvMw=="
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <FaInstagramSquare className="social-iconFoot" />
              </a>
              <a
                href="https://twitter.com/PrestonAcademy2"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <FaTwitterSquare className="social-iconFoot" />
              </a>
              <a
                href="https://wa.me/441772821039"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <FaWhatsappSquare className="social-iconFoot" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="foot-copyright">
        <div className="foot-logoBox">
          <img src={Logo} alt="" />
        </div>
        <p className="foot-logoPara">
          Copyright <FaCopyright className="copy" /> {new Date().getFullYear()}{" "}
          All Rights Reserved
        </p>
        <div className="foot-partner">
          {PartnerData.map((partner, index) => {
            return (
              <img
                key={index}
                src={partner.IconImg}
                alt=""
                className="foot-partImg"
              />
            );
          })}
          <img src={Member} alt="" className="british" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
