import React from "react";
import "./style/service.css";
import General from "../../../assets/img/general.svg";
import Cambridge from "../../../assets/img/cambr.svg";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="service-cont">
      <h1 className="service-header">Our Services</h1>
      <div className="service-paraCont">
        {/*//* For the general english container */}
        <div className="paraCont">
          <img src={General} alt="" />
          <h3 className="">General English Courses</h3>
          <p className="">
            Our qualified teachers and experienced staff  help students to
            prepare for social English, career improvement and education.
            Students will work on all four main language skills of reading,
            writing, listening and speaking along with grammar, pronunciation
            and vocabulary.
          </p>
          <NavLink to="/courses" className="para-btn">
            Courses
          </NavLink>
        </div>
        {/*//* For the Cambridge IELTS Preparation Courses*/}
        <div className="paraCont">
          <img src={Cambridge} alt="" />
          <h3 className="">Cambridge IELTS Preparation Courses</h3>
          <p className="">
            Our IELTS preparation course will develop your skills for taking the
            IELTS exam. This course is suitable for those students who want to
            prepare for the IELTS examination as it will help them to practise
            all four skills; Listening, speaking, reading and writing as well as
            grammar and vocabulary needed for the exam.
          </p>
          <NavLink to="/exam-prep" className="para-btn">
            More Information
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
