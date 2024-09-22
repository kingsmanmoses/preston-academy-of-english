import React from "react";
import "./style/comment.css";
//! Importing Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
//! Importing Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//! importing Pagination modules
import { Pagination, Navigation } from "swiper/modules";
//! To import  the image for the comment
import CommmentProfile from "../../../assets/img/commentProfile.jpg";

const CommentData = [
  {
    id: 1,
    personName: "Trinidad Belé",
    desc: "I had the privilege of studying at Preston Academy of English, and I can confidently say that it was an outstanding experience. From the moment I stepped into the institute, I was greeted with a warm and welcoming atmosphere.",
    link: "",
  },
  {
    id: 2,
    personName: "Feras Helal",
    desc: "Highly recommend this academy. Classes are interactive, practical reading, writing, speaking and listening. The group is small which makes it more personalized. I took the standard 15 hours per week + IELS exam preparation.",
    link: "",
  },
  {
    id: 3,
    personName: "philomluck vilay",
    desc: "I really enjoyed studying here. The teacher was very attentive. I took a general English course. I could ask for extra learning materials which were very good and helpful. Based on your foundation, the Academy is willing to help you improve and reach your goal. I also enjoyed learning with friends from different countries, for me the Preston Academy of English has given me more than the language skills.",
    link: "",
  },
];

const Comments = () => {
  return (
    <div className="comment-cont">
      <h1 className="comment-title">Testimonials</h1>
      <Swiper
        className="comment_cont"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
      >
        {CommentData.map((comment) => {
          return (
            <SwiperSlide className="comment_card" key={comment.id}>
              <img
                className="comment_img"
                src={CommmentProfile}
                width={100}
                height={100}
                alt="tech"
              />
              <h3 className="comment_name">{comment.personName}</h3>
              <div className="comment">
                <p className="comment_desc">{comment.desc}</p>
                <a href={comment.link} className="comment_btn">
                  More Google Reviews
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Comments;
