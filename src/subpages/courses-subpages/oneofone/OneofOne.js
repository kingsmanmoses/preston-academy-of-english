import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const OneofOne = () => {
  useEffect(() => {
    document.title = "1 of 1 Courses - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="general-cont">
        <h1 className="general-header">1 to 1 Courses</h1>
        <div className="general-detailCont">
          <p className="general-para">
            Our one to one classes provides you with an opportunity to work and
            improve your individual needs of English language. This can be one
            of the fastest and most effective ways of improving English
            language. We work closely with you to provide a personalised
            learning plan from our Academic Managers who will design the course
            according to your specific requirements. Minimum booking is for two
            hours per week.
            <br /> <br /> This course is only available in the afternoons from
            14.00. However you can select the time that is suitable for you in
            the afternoon for the class. One to One Students will be given
            tutorials, progress tests and welfare support to chart their
            progress and ensure they are happy inside as well as outside the
            classroom. This course can also be combined with a 15 or 20 hours
            General English Course to gain more benefit from your time at
            Preston Academy of English.
          </p>
          <div className="general-list">
            <p className="generalList-header">
              What is included in your course fees?{" "}
            </p>
            <ul className="general-listBox">
              <li className="general-listText">
                Classroom Materials and course book
              </li>
              <li className="general-listText">
                Free University entrance advice
              </li>
              <li className="general-listText">
                Free student support services
              </li>
              <li className="general-listText">
                Oxford placement test and interview
              </li>
              <li className="general-listText">
                Free social programme activities
              </li>
              <li className="general-listText">
                Welcome pack and welcome meeting
              </li>
              <li className="general-listText">
                Certificate of Attendance – you must achieve minimum 80%
                attendance
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
              <tbody>
                <tr>
                  <td>Price Per Hour:</td>
                  <td>£50</td>
                </tr>
                <tr>
                  <td>Enrolment Fee:</td>
                  <td>£50</td>
                </tr>
                <tr>
                  <td>Course Book:</td>
                  <td>£30</td>
                </tr>
                <tr>
                  <td className="notice-red">Please Note:</td>
                  <td className="notice-red">
                    24 Hours notice is required for cancellation or the lesson
                    will be charged.
                  </td>
                </tr>
                <tr>
                  <td>Hours per week:</td>
                  <td>Minimum 2 hours booking</td>
                </tr>
                <tr>
                  <td>Hours a Day:</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>Timetable:</td>
                  <td>
                    It is your choice, any day from Monday to Thursday from
                    14.00pm to 16.00pm
                  </td>
                </tr>
                <tr>
                  <td>Start date:</td>
                  <td>
                    Any Monday(When a Monday is a bank holiday, Tuesday is the
                    start day)
                  </td>
                </tr>
                <tr>
                  <td>Age requirement:</td>
                  <td>18+</td>
                </tr>
                <tr>
                  <td>Minimum Booking:</td>
                  <td>One session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <NavLink to="/apply-now" className="all-courseBtn">
            Book Now
          </NavLink>

          <div className="generalOther-courseCont">
            <h4 className="generalOtherCourse-header">
              You can add any of these courses to 1 to 1 Courses:
            </h4>
            <div className="generalOther-boxCont">
              <NavLink to="/general-english" className="generalOther-courseBox">
                General English
              </NavLink>
              <NavLink to="/english-ielts" className="generalOther-courseBox">
                IELTS Exam Preparation
              </NavLink>
              <NavLink to="/speaking-skills" className="generalOther-courseBox">
                Speaking skills
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

export default OneofOne;
