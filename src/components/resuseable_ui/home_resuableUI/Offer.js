import React from "react";
import Time from "../../../assets/img/time.svg";
import TeachingRoom from "../../../assets/img/class.svg";
// import Unlimted from "../../../assets/img/access.svg";
import "./style/offer.css";

const Offer = () => {
  return (
    <div className="offer-cont">
      <div className="offer-detail">
        <div className="detail-cont">
          <img src={TeachingRoom} alt="" className="teach" />
          <h3>Great Teachers</h3>
          <p>
            Effective and passionate teachers that will help you in to improve
            and support you in your English language learning journey.
          </p>
        </div>
        <div className="detail-cont">
          <img src={Time} alt="" />
          <h3>24/7 Services</h3>
          <p>
            At Preston Academy of English, we understand that customers needs
            don’t follow a 9-to-5 schedule. That’s why we’re proud to offer
            round-the-clock support to assist you whenever you need it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
