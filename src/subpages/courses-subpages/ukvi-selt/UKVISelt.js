import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const UKVISelt = () => {
  useEffect(() => {
    document.title = "UKVISELT - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="general-cont">
        <h1 className="general-header">
          UKVI SELT A1 / A2 / B1 Test Preparation
        </h1>
        <div className="general-detailCont">
          <p className="general-para">
            A2 / B1 Test/ GESE Grade 5 / Settlement/ ILR /Naturalisation
            (Citizenship) Our A2 and B1 Test preparation course is for students
            who already have a good use of the English language and need to take
            the A2 or B1 test as part of a visa application for a spouse visa
            settlement or citizenship. Our qualified and experienced teachers
            will show you the testing method and the way you will be tested.
            Topics will be discussed and practised. <br /> <br /> An exam
            situation will be practised and support will be given by the
            teacher. Any weak points will be looked at and correction will be
            provided. The language you need to use in the exam will be
            discussed. This will include talking about the future, your opinion,
            talking about events in the future and recent past, giving reasons,
            time of the of events and the reasons. Types of grammar you need to
            use in the exam will be discussed. Such as present perfect tense
            including use of with, for, since, ever, never, just. Connecting
            sentences using because; will for the future for future plans.
            Adjectives and adverbs of amount and your choices.
          </p>
          <div className="general-list">
            <p className="generalList-header">
              <span>PLEASE NOTE:</span> ONLY CERTIFICATES FROM APPROVED SELT
              PROVIDERS WILL BE ACCEPTED BY UKVI FOR APPLICATIONS FOR INDEFINITE
              LEAVE TO REMAIN.
            </p>
            <p className="ukviTest-TestImpo">
              Please call us on 01772821039 for the next A2/B1 test preparation
              course.
            </p>
          </div>
          {/* //! For the table */}
          <div className="general-tableCont">
            <h1>Course Summary</h1>
            <table className="general-table">
              <tbody>
                <tr>
                  <td>Study Hours:</td>
                  <td>2 Per Week</td>
                </tr>
                <tr>
                  <td>Timetable:</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td> £50</td>
                </tr>
                <tr>
                  <td>Age Requirement:</td>
                  <td>18+</td>
                </tr>
                <tr>
                  <td>Class Size Max:</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Average Class Size:</td>
                  <td>1 - 3</td>
                </tr>
              </tbody>
            </table>
          </div>

          <NavLink to="/apply-now" className="all-courseBtn">
            Book Now
          </NavLink>

          <div className="generalOther-courseCont">
            <h4 className="generalOtherCourse-header">
              You can add any of these courses to UKVI SELT A1 / A2 / B1 Test
              Preparation:
            </h4>
            <div className="generalOther-boxCont">
              <NavLink to="/general-english" className="generalOther-courseBox">
                General English
              </NavLink>
              <NavLink to="/english-ielts" className="generalOther-courseBox">
                IELTS Exam Preparation
              </NavLink>
              <NavLink to="/speaking-skills" className="generalOther-courseBox">
                Speaking Skills
              </NavLink>

              <NavLink to="/onetoone" className="generalOther-courseBox">
                1 To 1 Courses
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UKVISelt;
