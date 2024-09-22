import React from "react";
import "./style/partner.css";
import Online from "../../../assets/img/online.png";
import Partner from "../../../assets/img/partner.png";
import British from "../../../assets/img/british.JPG";
import Member from "../../../assets/img/member.png";

//TODO: Either I add caraousel or I reduce the size or I make it grid

const PartnerData = [
  {
    IconImg: Online,
  },
  {
    IconImg: Partner,
  },
  {
    IconImg: British,
  },
];

const Partnership = () => {
  return (
    <div className="partner-cont">
      <div className="partner-imgCont">
        {PartnerData.map((partner, index) => {
          return (
            <img
              key={index}
              src={partner.IconImg}
              alt=""
              className="part-img"
            />
          );
        })}
        <img src={Member} alt="" className="img-british" />
      </div>
    </div>
  );
};

export default Partnership;
