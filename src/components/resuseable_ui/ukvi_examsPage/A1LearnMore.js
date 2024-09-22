import React from "react";
import "./A1.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { TbDeviceDesktopUp } from "react-icons/tb";
import { IoCheckmark } from "react-icons/io5";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { IoMdTimer } from "react-icons/io";
import { VscChecklist } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const A1LearnMore = () => {
  return (
    <>
      <Header />
      <div className="a1generalCont">
        <div className="aLearn-moreCont">
          <div className="aLearn-leftHeader">
            <h1>SELT A1</h1>
            <p>£150.00</p>
          </div>
          <div className="aLearn-rightHeader">
            <h3>Suitable for</h3>
            <div>
              <FaUserGraduate />
              <p>Live in the UK visa</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="aLearn-detailCont">
          <div className="aLearn-detailItem">
            <h3>What's included</h3>
            <p>Speaking & Listening</p>
          </div>
          <hr />
          <div className="aLearn-detailItem">
            <h3>Exam Type</h3>
            <p>Test Centre</p>
          </div>
          <hr />
          <div className="aLearn-detailItem">
            <h3>Results</h3>
            <div className="resultCont">
              <TbDeviceDesktopUp className="resultCont-icon" />
              <p>
                Results comes out in <b>3 working days</b>{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="aLearn-detailItem">
            <h3>Total</h3>
            <div className="aLearn-priceCont">
              <h2>£150.00</h2>
              <div>
                <IoCheckmark className="aLearn-icon" />
                Written & Spoken exam
              </div>
              <div>
                <IoCheckmark className="aLearn-icon" />
                Test Centre
              </div>
              <div>
                <IoCheckmark className="aLearn-icon" />
                Take 2
              </div>
            </div>
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAIUVdxpUQ0hGRFFFR1FUUTJIOFpYOTlNNzZYRUlRMi4u"
              target="_blank"
              rel="noreferrer"
            >
              Book Slot
            </a>
          </div>
        </div>
        {/*  */}
        <div className="aLearn-expectCont">
          <div className="aLearn-expectItem">
            <div className="each-expectItemCont">
              <FaGraduationCap className="expectIcon" />

              <h5>Approved by the</h5>
              <p>UK Home Office</p>
            </div>
            <div className="each-expectItemCont">
              <FaGlobeAmericas className="expectIcon" />

              <h5>Computer based test in</h5>
              <p>110+ countries</p>
            </div>
            <div className="each-expectItemCont">
              <GiNetworkBars className="expectIcon" />

              <h5>Duration: </h5>
              <p>8-9 minutes</p>
            </div>
            <div className="each-expectItemCont">
              <IoMdTimer className="expectIcon" />

              <h5>Official results in </h5>
              <p>3 working days</p>
            </div>
            <div className="each-expectItemCont">
              <VscChecklist className="expectIcon" />

              <h5>Take 2 </h5>
              <p>Resit option</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="otherCourses-learnMoreCont">
          <h2>Other Exams You Maybe Interested In:</h2>
          <div>
            <div className="ukvi-testCont">
              <div className="each-testCont">
                <h3>A2 Speaking & Listening Test</h3>
                <div className="priceCont">
                  <h4>CEFR A2</h4>
                  <p>£150.00</p>
                </div>
                <p>
                  A 2-skills (Speaking & Listening) exam in English, aligned to
                  the A2 level...
                </p>
                <div className="test-btnCont">
                  <NavLink className="red-testBtn" to="/ukvi/a2-test">
                    Learn More
                  </NavLink>
                  <a
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAIUVdxpUQ0hGRFFFR1FUUTJIOFpYOTlNNzZYRUlRMi4u"
                    target="_blank"
                    rel="noreferrer"
                    className="blue-testBtn"
                  >
                    Book Test
                  </a>
                </div>
              </div>

              <div className="each-testCont">
                <h3>B1 Speaking & Listening Test</h3>
                <div className="priceCont">
                  <h4>CEFR B1</h4>
                  <p>£150.00</p>
                </div>
                <p>
                  A 2-skills (Speaking and Listening) exam in English, aligned
                  to the B1 level...
                </p>
                <div className="test-btnCont">
                  <NavLink className="red-testBtn" to="/ukvi/b1-test">
                    Learn More
                  </NavLink>
                  <a
                    className="blue-testBtn"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAIUVdxpUQ0hGRFFFR1FUUTJIOFpYOTlNNzZYRUlRMi4u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book Test
                  </a>
                </div>
              </div>

              <div className="each-testCont">
                <h3>B1 - B2 Listening, Reading, Writing & Speaking</h3>
                <div className="priceCont">
                  <h4>CEFR B1 - B2</h4>
                  <p>£175.00</p>
                </div>
                <p>
                  A 4-skills (Listening, Reading,Writing & Speaking) exam in
                  English, aligned...
                </p>
                <div className="test-btnCont">
                  <NavLink className="red-testBtn" to="/ukvi/b1-b2-test">
                    Learn More
                  </NavLink>
                  <a
                    className="blue-testBtn"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAIUVdxpUQ0hGRFFFR1FUUTJIOFpYOTlNNzZYRUlRMi4u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book Test
                  </a>
                </div>
              </div>

              <div className="each-testCont">
                <h3>C1 - C2 Listening, Reading, Writing & Speaking</h3>
                <div className="priceCont">
                  <h4>CEFR C1 - C2</h4>
                  <p>£175.00</p>
                </div>
                <p>
                  A 4-skills (Listening, Reading,Writing & Speaking) exam in
                  English, aligned...
                </p>
                <div className="test-btnCont">
                  <NavLink className="red-testBtn" to="/ukvi/c1-c2-test">
                    Learn More
                  </NavLink>
                  <a
                    className="blue-testBtn"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAIUVdxpUQ0hGRFFFR1FUUTJIOFpYOTlNNzZYRUlRMi4u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book Test
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default A1LearnMore;
