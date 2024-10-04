import React, { useEffect } from "react";
import "./ukviForm.css";
import Header from "../../../header/Header";
import Footer from "../../../footer/Footer";
import FideloUKVI from "../fidelo/FideloUKVI";

const UKVIForm = () => {
  useEffect(() => {
    document.title = "UKVI Booking Form - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="applyStudCont">
        <div className="applyStud-header">
          <h2>Please fill in the form </h2>
        </div>
        <FideloUKVI />
      </div>
      <Footer />
    </>
  );
};

export default UKVIForm;
