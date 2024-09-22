import React, { useEffect } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { NavLink } from "react-router-dom";

const EnglishIELTS = () => {
  useEffect(() => {
    document.title =
      "General English + IELTS Exam Preparation - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="general-cont">
        <h1 className="general-header"> IELTS Exam Preparation</h1>
        {/* //! For the table */}
        {/* //TOdo: Remeber t0 add table */}
        <div className="">
          <table></table>
        </div>
        <div className="general-detailCont">
          <p className="general-para">
            Cambridge IELTS is an internationally recognized English language
            test, that can be used to show your English level for higher
            education and visa needs. Our IELTS preparation course will develop
            your skills for taking the IELTS exam. Students will get support in
            practising all four skills; Listening, speaking, reading and writing
            with integrated grammar and vocabulary. Students will practise
            different techniques required to achieve their grades. They will use
            handouts as well as other materials. Students will be tested in
            class to provide them with real exam practice.
          </p>
          <div className="general-list">
            <p className="generalList-header">
              Our support includes the following:
            </p>
            <ul className="general-listBox">
              <li className="general-listText">Classroom materials.</li>
              <li className="general-listText"> University entrance advice.</li>
              <li className="general-listText">
                Academic support including extra learning information if
                requested by student and to the needs of the student
              </li>
              <li className="general-listText">Student support services</li>
              <li className="general-listText">
                Oxford placement test as well as writing and speaking
                assessment.
              </li>
              <li className="general-listText">
                Individual learning plan interview with the Academic Manager.
              </li>
              <li className="general-listText">
                Certificate of Attendance – you must achieve a minimum of 80%
                attendance.
              </li>
            </ul>
          </div>

          <div className="general-list">
            <p className="generalList-header">
              The Levels Included in this course:{" "}
            </p>
            <ul className="general-listBox">
              <li className="general-listText">B2 CEFR (Upper Intermediate)</li>
              <li className="general-listText"> B1-B2 CEFR (Intermediate)</li>
              <li className="general-listText">c1 CEFR (Advanced)</li>
            </ul>
          </div>
          {/* //! For the table */}
          <div className="general-tableCont">
            <h1>Course Summary</h1>
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
              You can add any of these courses to IELTS Exam Preparation:
            </h4>
            <div className="generalOther-boxCont">
              <NavLink to="/general-english" className="generalOther-courseBox">
                General English
              </NavLink>

              <NavLink to="/speaking-skills" className="generalOther-courseBox">
                Speaking Skills
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

export default EnglishIELTS;
