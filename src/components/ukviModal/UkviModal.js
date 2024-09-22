import React from "react";
import { NavLink } from "react-router-dom";
import "./ukvimodal.css";
import { IoMdCloseCircle } from "react-icons/io";

const UkviModal = ({ closeModal }) => {
  return (
    <div className="modalBg">
      <div className="modalCont">
        <div onClick={() => closeModal(false)}>
          <IoMdCloseCircle />
        </div>
        <ul>
          <NavLink to="/ukvi">
            <li>UKVI Exams</li>
          </NavLink>
          <NavLink to="/apply-stud">
            <li>Apply now for Students</li>
          </NavLink>
          <NavLink to="/priceList">
            <li>Price List</li>
          </NavLink>
          <NavLink to="/student-accommodation">
            <li>Student Accommodation</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default UkviModal;
