import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ukvi.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import UkviFAQ from "./UkviFAQ";

const UKVI = () => {
  useEffect(() => {
    document.title = "UKVI Exams - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="ukvi-generalCont">
        <h1 className="general-header">UKVI English Exams</h1>
        <div className="ukvi-testCont">
          <div className="each-testCont">
            <h3>A1 Speaking & Listening Test</h3>
            <div className="priceCont">
              <h4>CEFR A1</h4>
              <p>£150.00</p>
            </div>
            <p>
              A 2-skills (Speaking and Listening) exam in English, aligned to
              the A1 level...
            </p>
            <div className="test-btnCont">
              <NavLink className="red-testBtn" to="a1-test">
                Learn More
              </NavLink>
              {/* <NavLink
                to="/ukvi-form"
                // target="_blank"
                // rel="noreferrer"
                className="blue-testBtn"
              >
                Book Test
              </NavLink> */}
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
            <h3>A2 Speaking & Listening Test</h3>
            <div className="priceCont">
              <h4>CEFR A2</h4>
              <p>£150.00</p>
            </div>
            <p>
              A 2-skills (Speaking & Listening) exam in English, aligned to the
              A2 level...
            </p>
            <div className="test-btnCont">
              <NavLink className="red-testBtn" to="a2-test">
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
              A 2-skills (Speaking and Listening) exam in English, aligned to
              the B1 level...
            </p>
            <div className="test-btnCont">
              <NavLink className="red-testBtn" to="b1-test">
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
              <NavLink className="red-testBtn" to="b1-b2-test">
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
              <NavLink className="red-testBtn" to="c1-c2-test">
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
        <div className="ukvi-faqCont">
          <h2>FAQ'S</h2>
          {/* //TODO: Copy accordian from the accord comp */}
          <UkviFAQ />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UKVI;
