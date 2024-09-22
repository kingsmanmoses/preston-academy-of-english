import React from "react";
import "./style/ukvi.css";
import { NavLink } from "react-router-dom";

function UKVI() {
  return (
    <div className="ukvi-cont">
      <h1 className="ukvi-header">UKVI English Test</h1>
      <div className="ukvi-detailCont">
        <div className="ukvi-detail">
          <h2 className="">A1 Test</h2>
          <p className="">spouse/Partner Visa/ Parental Route Visa</p>
        </div>
        <div className="ukvi-detail">
          <h2 className="">A2 Test</h2>
          <p className="">
            Further Leave to Remain (FLRM) / Extensions (CEFR A2 SELT Test)
          </p>
        </div>
        <div className="ukvi-detail">
          <h2 className="">B1 Test</h2>
          <p className="">
            ILR (Settlement) / British citizenship Skilled and Health Care
            Worker Visa
          </p>
        </div>
      </div>
      <NavLink to="/ukvi" className="ukvi-btn">
        Exam Preparation
      </NavLink>
    </div>
  );
}

export default UKVI;
