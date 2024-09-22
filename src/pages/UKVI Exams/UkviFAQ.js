import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { UkvFAQData } from "./UKVIData";

const UkviFAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      <div className="about-accordCont">
        {UkvFAQData.map((accord, index) => {
          return (
            <div className="accord-itemCont">
              <div className="accord-question" onClick={() => toggle(index)}>
                <h2>{accord.about}</h2>
                <span>{selected === index ? <FaMinus /> : <FaPlus />}</span>
              </div>
              <div
                className={
                  selected === index ? "accord-content show" : "accord-content"
                }
              >
                {accord.answer}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UkviFAQ;
