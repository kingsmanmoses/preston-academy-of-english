import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import "./modal.css";
import { NavLink } from "react-router-dom";

const ModalNav = ({ closeModal }) => {
  return (
    <div className="modalBg">
      <div className="modalCont">
        <div onClick={() => closeModal(false)}>
          <IoMdCloseCircle />
        </div>
        <ul>
          <NavLink to="/courses">
            <li>All Courses</li>
          </NavLink>
          <NavLink to="/general-english">
            <li>General English</li>
          </NavLink>
          <NavLink to="/english-ielts">
            <li>IELTS Exam Preparation</li>
          </NavLink>

          <NavLink to="/speaking-skills">
            <li>Speaking Skills</li>
          </NavLink>
          <NavLink to="/onetoone">
            <li>1 To 1 Courses</li>
          </NavLink>
          <NavLink to="/ukvi-test">
            <li>UKVI SELT A1 / A2 / B1 Test Preparation</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default ModalNav;
