import React from "react";
import "./price.css";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const PriceList = () => {
  return (
    <>
      <Header />
      <div className="price-cont">
        <h1 className="general-header">Price List</h1>

        <a
          className="coursePrice-btn"
          target="_blank"
          rel="noreferrer"
          href="//www.coursepricer.com/coursepricer/?school_id=1508"
        >
          Get a Price
        </a>
      </div>
      <Footer />
    </>
  );
};

export default PriceList;
