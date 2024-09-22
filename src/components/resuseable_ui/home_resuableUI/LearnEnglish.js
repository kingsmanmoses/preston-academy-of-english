import React from "react";
import { FaCity, FaPeopleCarry } from "react-icons/fa";

import "./style/learn.css";
import { SiGoogleclassroom } from "react-icons/si";
import { GiBookCover, GiFamilyHouse } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const LogoData = [
  {
    logo: <FaCity className="logo-img" />,
    parah: "Great Location",
  },
  {
    logo: <SiGoogleclassroom className="logo-img" />,
    parah: "Small number of students in academy ",
  },
  {
    logo: <FaPeopleCarry className="logo-img" />,
    parah: "small Class Sizes",
  },
  {
    logo: <GiFamilyHouse className="logo-img" />,
    parah: "Accommodation 15 minute walk to Academy",
  },
  {
    logo: <GiBookCover className="logo-img" />,
    parah: "Online learning suite",
  },
  {
    logo: <IoMdCheckmarkCircleOutline className="logo-img" />,
    parah: "British Council accredited",
  },
];

const LearnEnglish = () => {
  return (
    <div className="learn-cont">
      <div className="learn-headerCont">
        <h1 className="head">Why you'll love to learn at</h1>
        <h1 className="head red">Preston Academy of English</h1>
        <div className="line"></div>
      </div>
      {/* //* For the logo and details  */}
      <div className="logo-items">
        {LogoData.map((logo, index) => {
          return (
            <div className="logo-item">
              {logo.logo}
              <p className="">{logo.parah}</p>
            </div>
          );
        })}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default LearnEnglish;
