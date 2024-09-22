import React, { useEffect } from "react";
import "./course.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";

const Course = () => {
  useEffect(() => {
    document.title = "Courses - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="course-cont">
        <h1 className="course-header">Our Courses</h1>
        <div className="course-detailCont">
          <p className="course-para">
            At Preston Academy of English, our courses help you to develop your
            reading, writing, listening, and speaking skills. These courses are
            important if you want to improve your English language level for
            social language, employment, or education. Our teachers, with
            support from our Academic Manager, work hard to make sure you get
            the maximum from your course. Our support includes the following:
          </p>
          <div className="course-listItemBox">
            <ul className="itemBox">
              <li className="item">Classroom materials.</li>
              <li className="item">Course book including online practice.</li>
              <li className="item">University entrance advice.</li>
              <li className="item">
                Academic support including extra learning information if
                requested by student and to the needs of the student.
              </li>
              <li className="item">Student support services.</li>
              <li className="item">
                Oxford placement test to make sure you are at the right level.
              </li>
              <li className="item">
                Individual learning plan interview with the Academic Manager.
              </li>
              <li className="item">
                Certificate of Attendance – you must achieve a minimum of 80%
                attendance.
              </li>
              <li className="item">
                Computer Aided Language Learning Lab (CALLL).
              </li>
            </ul>
            <p className="other-para">
              For more information, please click on the any of the following:
            </p>
          </div>
        </div>
        <div className="other-courseCont">
          <NavLink to="/general-english" className="other-courseBox">
            General English
          </NavLink>
          <NavLink to="/english-ielts" className="other-courseBox">
            IELTS Exam Preparation
          </NavLink>

          <NavLink to="/speaking-skills" className="other-courseBox">
            Speaking Skills
          </NavLink>
          <NavLink to="/onetoone" className="other-courseBox">
            1 To 1 Courses
          </NavLink>
          <NavLink to="/ukvi-test" className="other-courseBox">
            UKVI SELT A1 / A2 / B1 Test Preparation
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
