import React, { useEffect } from "react";
import "./apply.css";
import { NavLink } from "react-router-dom";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import FideloWidget from "./fidelo/Fidelo";

const ApplyStud = () => {
  useEffect(() => {
    document.title = "Apply Now For Students - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="applyStudCont">
        <div className="applyStud-header">
          <h2>Apply Now For Students</h2>
          <p>
            Start your English learning in Preston <br /> complete the
            application form below and we will contact you within 24 hours{" "}
            <br /> Click here to look at our{" "}
            <NavLink className="applyStudy-nav" to="/priceList">
              price List
            </NavLink>{" "}
          </p>
        </div>
        <FideloWidget />
      </div>
      <Footer />
    </>
  );
};

export default ApplyStud;
