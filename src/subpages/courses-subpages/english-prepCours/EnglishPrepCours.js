import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const EnglishPrepCours = () => {
  useEffect(() => {
    document.title =
      "General English + Exam Preparation - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="general-cont">
        <h1 className="general-header"> Speaking Skills</h1>
        <div className="general-detailCont">
          <p className="general-para">
            Do you want to improve your English speaking skills? Preston Academy
            of English offer a specific English speaking skills course. <br />{" "}
            <br />
            This course will help you to improve your speaking skills with
            vocabulary, pronunciation, grammar, intonation as well as other
            parts of speech. <br /> <br />
            Our qualified teachers will teach you by using a variety of
            techniques to support you in improving your speaking skills. Our
            speaking skills course is designed to improve your speaking skills
            by making it fun and exciting.
          </p>

          <div className="general-list">
            <p className="generalList-header">This course is useful for:</p>
            <ul className="general-listBox">
              <li className="general-listText">
                People who want to gain confidence in their spoken English
              </li>
              <li className="general-listText">
                {" "}
                People who need to improve their English for their career
              </li>
              <li className="general-listText">
                People who need to improve their speaking skills for an exam or
                qualification
              </li>
            </ul>
          </div>

          <div className="general-list">
            <p className="generalList-header">
              Our support includes the following:
            </p>
            <ul className="general-listBox">
              <li className="general-listText">Classroom materials.</li>
              <li className="general-listText">University entrance advice. </li>
              <li className="general-listText">
                Academic support including extra learning information if
                requested by student and to the needs of the student
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
                Computer Aided Language Learning Lab (CALLL) is available for
                students during free periods
              </li>
            </ul>
          </div>
          <div className="general-list">
            <p className="generalList-header">
              The classes for the speaking skill course are as follows:{" "}
            </p>
            <ul className="general-listBox">
              <li className="general-listText">
                A1 CEFR (Beginner) and A2 CEFR (Elementary)- mixed ability class
              </li>
              <li className="general-listText">
                B1 CEFR (Pre-Intermediate) and B1-B2 CEFR (Intermediate)- mixed
                ability class
              </li>
              <li className="general-listText">
                B2 CEFR (Upper Intermediate) and C1 CEFR (Advanced)- mixed
                ability class{" "}
              </li>
            </ul>
          </div>
          {/* //! For the table */}
          <div className="general-tableCont">
            <h1>Course information:</h1>
            <table className="general-table">
              <thead>
                <th>
                  <td>Hours a week</td>
                </th>
                <th>
                  <td>Days</td>
                </th>
                <th>
                  <td>Time</td>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>Monday, Tuesday, Wednesday and Thursday</td>
                  <td>12.45 – 14.15</td>
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

          <NavLink to="/apply-now" className="all-courseBtn">
            Book Now
          </NavLink>

          <div className="generalOther-courseCont">
            <h4 className="generalOtherCourse-header">
              You can add any of these courses to Speaking Skills:
            </h4>
            <div className="generalOther-boxCont">
              <NavLink to="/general-english" className="generalOther-courseBox">
                General English
              </NavLink>
              <NavLink to="/english-ielts" className="generalOther-courseBox">
                IELTS Exam Preparation
              </NavLink>

              <NavLink to="/onetoone" className="generalOther-courseBox">
                1 to 1 Courses
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

export default EnglishPrepCours;
