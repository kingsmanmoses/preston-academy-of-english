import React from "react";
import "./style/ukvi.css";
import { NavLink } from "react-router-dom";

function UKVI() {
  return (
    <div className="ukvi-cont">
      <h1 className="ukvi-header">UKVI English Test</h1>
      <div className="ukvi-detailCont">
        <NavLink to="/ukvi" className="ukvi-detail">
          <h2 className="">A1 Test</h2>
          <p className="">spouse/Partner Visa/ Parental Route Visa</p>
        </NavLink>
        <NavLink to="/ukvi" className="ukvi-detail">
          <h2 className="">A2 Test</h2>
          <p className="">
            Further Leave to Remain (FLRM) / Extensions (CEFR A2 SELT Test)
          </p>
        </NavLink>
        <NavLink to="/ukvi" className="ukvi-detail">
          <h2 className="">B1 Test</h2>
          <p className="">
            ILR (Settlement) / British citizenship Skilled and Health Care
            Worker Visa
          </p>
        </NavLink>
      </div>
      <a
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAIUVdxpUQ0hGRFFFR1FUUTJIOFpYOTlNNzZYRUlRMi4u"
        target="_blank"
        rel="noreferrer"
        className="ukvi-btn"
      >
        Book Test
      </a>
    </div>
  );
}

export default UKVI;
