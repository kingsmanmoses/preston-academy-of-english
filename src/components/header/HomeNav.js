import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./head.css";
import { FaAngleDown, FaAngleUp, FaBook, FaHome } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { MdPriceChange } from "react-icons/md";
import { GiFamilyHouse, GiTable } from "react-icons/gi";
// import { PiExamFill } from "react-icons/pi";
import { FaTreeCity } from "react-icons/fa6";
import { IoApps, IoCloseCircle } from "react-icons/io5";
import ModalNav from "../modalNavbar/ModalNav";
import DropDown from "../resuseable_ui/DropDown/DropDown";
// import UkviMenuDropDown from "../resuseable_ui/ukvi-examsDropdown/UkviMenuDropDown";
import UkviModal from "../ukviModal/UkviModal";
import { IoIosSchool } from "react-icons/io";
// import LanguageSelector from "../languageSelector/LanguageSelector";
// import i18n from "../languageSelector/i18n";

const HomeNav = () => {
  //!for the modal pop up
  const [openModal, setOpenModal] = useState(false);
  const [openUkviModal, setopenUkviModal] = useState(false);

  //! To change background color of the navbar
  const [header, setHeader] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // * Toggle menu
  const [Toggle, ShowMenu] = useState(false);
  const [showDropMenu, setShowDropMenu] = useState(false);
  // const [showUkviDropDown, setShowUkviDropDown] = useState(false);
  return (
    <>
      <div className={header ? "home-nav scroll-header" : "home-nav"}>
        {/* //* Logo */}
        <Link to="/" className="logo-cont">
          <img className="logo" src={Logo} alt="logo_preston_academy" />
        </Link>
        {/* //* For Menu list */}
        <div className="">
          <ul className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
            <Link to="/">
              <li className="menu-name">
                <FaHome className="nav-icons" />
                <p className="menu-para">Home</p>
              </li>
            </Link>
            <Link
              to="/courses"
              className="dropdown course"
              onMouseEnter={() => setShowDropMenu(true)}
              onMouseLeave={() => setShowDropMenu(false)}
            >
              <li className="menu-name">
                <FaBook className="nav-icons" /> Courses{" "}
                {showDropMenu ? <FaAngleDown /> : <FaAngleUp />}
                {/* <FaAngleDown className="drop-icon" /> */}
              </li>
              {showDropMenu && <DropDown />}
            </Link>

            {/* //! nav for course in mobile version */}
            <div onClick={() => setOpenModal(true)} className="course-mobile">
              <li className="menu-name">
                <FaBook className="nav-icons" />
                <p className="menu-para">Courses</p>
              </li>
            </div>
            <Link to="/about-preston-academy-of-english">
              <li className="menu-name">
                <BsPersonVcardFill className="nav-icons" />
                <p className="menu-para">About Us</p>
              </li>
            </Link>
            <Link to="/contact">
              <li className="menu-name">
                <BiSolidContact className="nav-icons" />
                <p className="menu-para">Contact</p>
              </li>
            </Link>
            <Link to="/price-list">
              <li className="menu-name">
                <MdPriceChange className="nav-icons" />
                <p className="menu-para">Price List</p>
              </li>
            </Link>
            <Link to="/ukvi">
              <li className="menu-name">
                <GiTable className="nav-icons" />
                <p className="menu-para">UKVI Exams</p>
              </li>
            </Link>
            {/* 
            <Link
              to="/ukvi"
              className="dropdown course"
              onMouseEnter={() => setShowUkviDropDown(true)}
              onMouseLeave={() => setShowUkviDropDown(false)}
            >
              <li className="menu-name">
                <PiExamFill className="nav-icons" /> UKVI Exams{" "}
                {showUkviDropDown ? <FaAngleDown /> : <FaAngleUp />}
                <FaAngleDown className="drop-icon" />
              </li>
              {showUkviDropDown && <UkviMenuDropDown />}
            </Link> */}

            {/* <div
              onClick={() => setopenUkviModal(true)}
              className="course-mobile"
            >
              <li className="menu-name">
                <PiExamFill className="nav-icons" />
                <p className="menu-para">UKVI Exams</p>
              </li>
            </div> */}

            <Link to="/about-preston">
              <li className="menu-name">
                <FaTreeCity className="nav-icons" />
                <p className="menu-para">About Preston</p>
              </li>
            </Link>
            <Link to="/student-accommodation">
              <li className="menu-name">
                <GiFamilyHouse className="nav-icons" />
                <p className="menu-para">Student Accommodation</p>
              </li>
            </Link>

            <Link to="/apply-now" className="course-mobile">
              <li className="menu-name">
                <IoIosSchool className="nav-icons" />
                <p className="menu-para">Student Application</p>
              </li>
            </Link>
            <IoCloseCircle
              className="nav-close"
              onClick={() => ShowMenu(!Toggle)}
            />
          </ul>
        </div>
        <div>
          {/* //* For the btn */}
          <NavLink to="/apply-now" className="menu-btn">
            Apply Now
          </NavLink>

          {/* <LanguageSelector /> */}
          <IoApps className="nav-toggle" onClick={() => ShowMenu(!Toggle)} />

          {openModal && <ModalNav closeModal={setOpenModal} />}
          {openUkviModal && <UkviModal closeModal={setopenUkviModal} />}
        </div>
      </div>
    </>
  );
};

export default HomeNav;
