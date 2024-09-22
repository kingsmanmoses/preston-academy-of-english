import React from "react";
import "./drop.css";
import Course from "../../../assets/img/course.jpg";
import { NavLink } from "react-router-dom";

const DropDown = () => {
  return (
    <>
      {/*//! For the drop down div for courses */}
      <div className="drop-cont">
        <div className="drop-list">
          <ul className="drop-listCont">
            <NavLink to="/general-english" className="drop-menu">
              <li className="">General English</li>
            </NavLink>
            <NavLink to="/english-ielts" className="drop-menu">
              <li className="">IELTS Exam Preparation</li>
            </NavLink>

            <NavLink to="/speaking-skills" className="drop-menu">
              <li className="">Speaking Skills</li>
            </NavLink>
            <NavLink to="/onetoone" className="drop-menu">
              <li className="">1 To 1 Courses</li>
            </NavLink>
            <NavLink to="/ukvi-test" className="drop-menu">
              <li className="">UKVI SELT A1 / A2 / B1 Test Preparation</li>
            </NavLink>
          </ul>
        </div>
        <div className="drop-imgCont">
          <img src={Course} alt="" className="drop-img" />
        </div>
      </div>
    </>
  );
};

export default DropDown;
