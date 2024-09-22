import React, { useEffect, useState } from "react";
import { AboutData } from "./AboutData";
import "./about.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FaMinus, FaPlus } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Preston Academy of English";
  }, []);

  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      <Header />
      <div className="about-cont">
        <h1 className="course-header">About Us</h1>
        <div className="about-accordCont">
          {AboutData.map((accord, index) => {
            return (
              <div className="accord-itemCont">
                <div className="accord-question" onClick={() => toggle(index)}>
                  <h2>{accord.about}</h2>
                  <span>{selected === index ? <FaMinus /> : <FaPlus />}</span>
                </div>
                <div
                  className={
                    selected === index
                      ? "accord-content show"
                      : "accord-content"
                  }
                >
                  {accord.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
