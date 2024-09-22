import React, { useEffect } from "react";
import "./studentAccom.css";
// //! Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
//! Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//! import required modules
// import { Pagination } from "swiper/modules";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { NavLink } from "react-router-dom";

// const accommmodation = [
//   {
//     title: "Friargate Court Student Accommodation",
//     slideTitle: "Friargate Court Accommodation",
//     link: "https://www.friargatepreston.com/",
//     paraRefund: "Friargate Court",
//     imgClassName: "friargate",
//     YTParah: "Friargate Court, Preston",
//     YoutubeLink: "https://www.youtube.com/embed/BHp-NpqrCj0",
//   },
// ];

const StudentAccom = () => {
  useEffect(() => {
    document.title = "Student Accommodation - Preston Academy of English";
  }, []);

  // const [accom, setAccom] = useState(accommmodation[0]);

  // const handleSlideChange = (swiper) => {
  //   //! To get the current slide index
  //   const currentIndex = swiper.activeIndex;
  //   //! Update project state based on current slide index
  //   setAccom(accommmodation[currentIndex]);
  // };
  return (
    <>
      <Header />
      <div className="accom-cont">
        <div className="accom-swiper">
          <div className="trinity-img">
            <div className="friargate">
              <p>Friargate Court Accommodation</p>
            </div>
          </div>
        </div>
        <div className="accom-detailCont">
          <h1>Friargate Court Student Accommodation</h1>
          <span>Student Residence within a short walking distance.</span>
          <p>
            Friargate Court self-catering residence is centrally-located in the
            city centre and very close to Preston Academy of English. The
            student rooms with en-suite bathroom provide students with easy
            access to the academy and the many local facilities such as a
            supermarket, restaurants and the city centre. <br /> <br /> The
            location gives students the freedom to make their way around Preston
            in a quick and timely way, with Preston Railway Station nearby and
            Preston Bus Station nearby if you want to visit other towns and
            cities during your stay in the UK. <br /> <br /> Residents are
            provided with a safe, secure environment courtesy of the 24-hour
            security and CCTV in place at all accommodation buildings. They work
            hard to make the best possible experience for its residents, while
            every room is designed with the needs of students in mind. All bills
            are included within the payment. <br /> <br />
            <span>
              {" "}
              The following are included in the student residential
              accommodation:
            </span>
          </p>
          <ul>
            <li>Common room</li>
            <li>Outdoor area</li>
            <li>WiFi</li>
            <li>Desk and chair</li>
            <li>En-suite bathroom</li>
            <li>Bike storage</li>
            <li>Double bed</li>
          </ul>
          <div className="accom-smallDetailCont">
            <h4>You must pay for the following</h4>
            <ul>
              <li>Clothes washing machine</li>
              <li>Cleaning products</li>
            </ul>
            <h4>
              Please note that you will be expected to keep your own rooms,
              bathrooms and common areas clean.
            </h4>
          </div>
          <div className="accom-boldDetailCont">
            <a
              target="_blank"
              rel="noreferrer"
              className="accom-link"
              href="https://www.friargatepreston.com/"
            >
              Please click here for a virtual tour of Friargate Court
            </a>
            <p className="accom-enquiry">
              To make an enquiry:{" "}
              <NavLink to="/contact">please click here</NavLink>
            </p>
          </div>
        </div>
        <div className="accom-YTCont">
          <iframe
            src="https://www.youtube.com/embed/BHp-NpqrCj0"
            title="Friargate Court, Preston"
          ></iframe>
          <p>Friargate Court, Preston</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentAccom;

//
