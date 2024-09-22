import React from "react";
import { NavLink } from "react-router-dom";
import course from "../../../assets/img/exam.jpg";

const UkviMenuDropDown = () => {
  return (
    <>
      {/*//! For the drop down div for courses */}
      <div className="drop-cont">
        <div className="drop-list">
          <ul className="drop-listCont">
            <NavLink to="/apply-stud" className="drop-menu">
              <li className="">Apply now for Students</li>
            </NavLink>
            <NavLink to="/priceList" className="drop-menu">
              <li className="">Price List</li>
            </NavLink>
            <NavLink to="/student-accommodation" className="drop-menu">
              <li className="">Student Accommodation</li>
            </NavLink>
          </ul>
        </div>
        <div className="drop-imgCont">
          <img src={course} alt="" className="drop-img" />
        </div>
      </div>
    </>
  );
};

export default UkviMenuDropDown;
