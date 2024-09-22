import React from "react";
import "./whatsapp.css";
import { IoLogoWhatsapp } from "react-icons/io";

const Whatsapp = () => {
  return (
    <a href="https://wa.me/441772821039" target="_blank" rel="noreferrer">
      <IoLogoWhatsapp className="whatsapp" />
    </a>
  );
};

export default Whatsapp;
