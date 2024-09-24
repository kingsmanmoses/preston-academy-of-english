import React, { useEffect } from "react";
import "./general.css";
import { NavLink } from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import ProgressionChart from "../../../assets/img/Student Progression chart.png";
import CourseDescription from "../../../assets/files/Course Descriptor for Students A1 to C1.pdf";

const GeneralEnglish = () => {
  useEffect(() => {
    document.title = "General - English - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="general-cont">
        <h1 className="general-header">General English</h1>
        <div className="general-detailCont">
          <p className="general-para">
            At Preston Academy of English, our courses help you to develop your
            reading, writing, listening, and speaking skills with grammar and
            vocabulary. These courses are important if you want to improve your
            English language level for social language, employment, or
            education. Our teachers, with support from our Academic Manager,
            work hard to make sure you get the maximum from your course. Our
            support includes the following:
          </p>
          <div className="general-list">
            <p className="generalList-header">
              What is included in your course fees?{" "}
            </p>
            <ul className="general-listBox">
              <li className="general-listText">Classroom materials.</li>

              <li className="general-listText">University entrance advice.</li>
              <li className="general-listText">
                Academic support including extra learning information if
                requested by student and to the needs of the student.
              </li>
              <li className="general-listText">Student support services</li>
              <li className="general-listText">
                Oxford placement test to make sure you are at the right level.
              </li>
              <li className="general-listText">
                Individual learning plan interview with the Academic Manager.
              </li>
              <li className="general-listText">
                Certificate of Attendance – you must achieve a minimum of 80%
                attendance.
              </li>
              <li className="general-listText">
                Computer Aided Language Learning Lab (CALLL)
              </li>
            </ul>
          </div>

          <div className="general-list">
            <p className="generalList-header">
              The Levels Included in this course:
            </p>
            <ul className="general-listBox">
              <li className="general-listText">A1 CEFR (Beginner)</li>
              <li className="general-listText">A2 CEFR (Elementary)</li>
              <li className="general-listText">B1 CEFR (Pre-Intermediate)</li>
              <li className="general-listText">B1-B2 CEFR (Intermediate)</li>
              <li className="general-listText">B2 CEFR (Upper Intermediate)</li>
              <li className="general-listText">C1 CEFR (Advanced)</li>
            </ul>
          </div>
          {/* //! For the table */}
          <div className="general-tableCont">
            <h1>Course Summary</h1>
            <table className="general-table">
              <thead>
                <th>
                  <td>Hours</td>
                </th>
                <th>
                  <td>Days</td>
                </th>
                <th>
                  <td>Time (Am)</td>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>6 </td>
                  <td>Any 2 days</td>
                  <td>9.00 - 12.15</td>
                </tr>
                <tr>
                  <td>9 </td>
                  <td>Any 3 days</td>
                  <td>9.00 - 12.15</td>
                </tr>
                <tr>
                  <td>12 </td>
                  <td>Any 4 days</td>
                  <td>9.00 - 12.15</td>
                </tr>
                <tr>
                  <td>15 </td>
                  <td>Any 5 days</td>
                  <td>9.00 - 12.15</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="general-list">
            <p>
              Course length: 1 week – 50+ weeks <br />
              <br />
              Start any Monday, except if a bank holiday, Tuesday is the start
              day{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.gov.uk/bank-holidays"
              >
                ( please click here for UK bank holidays).
              </a>
            </p>
            <p>
              <span className="blue-head">
                {" "}
                Note: If your course includes a UK Bank Holiday, please ask the
                enrolment Officer to add an extra day to your course.
              </span>
              <br /> <br />
              Age requirement: must be 18 years and over. <br /> <br /> Maximum
              class size: 10 a class
            </p>
          </div>

          <div className="general-btnCont">
            <NavLink to="/apply-now" className="all-courseBtn">
              Book Now
            </NavLink>
            <a className="all-courseBtn" download href={ProgressionChart}>
              Download the progression chart
            </a>
            <a className="all-courseBtn" download href={CourseDescription}>
              Download course descriptor
            </a>
          </div>

          <div className="generalOther-courseCont">
            <h4 className="generalOtherCourse-header">
              You can add any of these courses to General English:
            </h4>
            <div className="generalOther-boxCont">
              <NavLink to="/english-ielts" className="generalOther-courseBox">
                IELTS Exam Preparation
              </NavLink>

              <NavLink to="/speaking-skills" className="generalOther-courseBox">
                Speaking Skills
              </NavLink>
              <NavLink to="/onetoone" className="generalOther-courseBox">
                1 To 1 Courses
              </NavLink>
              <NavLink to="/ukvi-test" className="generalOther-courseBox">
                UKVI SELT A1 / A2 / B1 Test Preparation
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GeneralEnglish;
