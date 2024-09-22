import React from "react";
import Home from "./Home";
import HomeNav from "../../components/header/HomeNav";
import Services from "../../components/resuseable_ui/home_resuableUI/Services";
import LearnEnglish from "../../components/resuseable_ui/home_resuableUI/LearnEnglish";
import Partnership from "../../components/resuseable_ui/home_resuableUI/Partnership";
import Offer from "../../components/resuseable_ui/home_resuableUI/Offer";
import Comments from "../../components/resuseable_ui/home_resuableUI/Comments";
import UKVI from "../../components/resuseable_ui/home_resuableUI/Ukvi";
import Footer from "../../components/footer/Footer";

const MainHomePage = () => {
  return (
    <>
      <HomeNav />
      <Home />
      <Services />
      <LearnEnglish />
      <Partnership />
      <Offer />
      <Comments />
      <UKVI />
      <Footer />
    </>
  );
};

export default MainHomePage;
