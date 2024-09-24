import React, { useEffect } from "react";
import "./preston.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const aboutPrestonData = [
  {
    title: "Shopping",
    parah:
      "Preston is one of the biggest shopping places in Lancashire. It has many famous brand stores and small, unique shops. You can find these shops on the main streets and in small, pretty side streets like Cannon Street and Winckley Street. In the city center, there are several shopping centers. One of them is the Miller Arcade, a beautiful old building. There are also busy markets where you can buy fresh local food and other items. You can also find many places to eat and drink. ",
    link: "https://www.visitpreston.com/shopping",
    imgLink:
      "https://images.pexels.com/photos/7987590/pexels-photo-7987590.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Food and drink in Preston",
    parah:
      "Preston has many places to eat. You can find fancy restaurants or casual ones. They serve food from all over the world. There are also many cafes where you can have coffee and lunch. Whether you want to sit and eat or take your food to go, Preston has many options.",
    link: "https://www.visitpreston.com/food-and-drink",
    imgLink:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    title: "Things to do in Preston",
    parah:
      "In the city center, there are many fun indoor activities for families. Preston also has a lively arts and culture scene with many museums and places to see exhibitions. For outdoor fun, there are great parks, gardens, and city trails. The Guild Wheel is a 21-mile path perfect for a day of cycling. You can also ride a heritage steam train at Ribble Steam Railway on Preston Docks to see the city’s beautiful scenery.",
    link: "https://www.visitpreston.com/things-to-see-and-do",
    imgLink:
      "https://images.pexels.com/photos/4997840/pexels-photo-4997840.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "All About Preston Blog",
    parah:
      "Our Visit Blog can help you plan your trip to Preston. It has information on fun things to do, hidden places to find, seasonal lists, and current events in the city. If you want to know about the latest business news in Preston, click the link below.",
    link: "https://www.visitpreston.com/visit-blog",
    imgLink:
      "https://images.pexels.com/photos/16512862/pexels-photo-16512862/free-photo-of-close-up-of-individual-keyboard-keys-making-a-word-blog.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Preston = () => {
  useEffect(() => {
    document.title = "About Preston - Preston Academy of English";
  }, []);
  return (
    <>
      <Header />
      <div className="aboutPreston-cont">
        <div className="preston-mainDetailCont">
          {aboutPrestonData.map((preston, index) => (
            <div className="preston-detailCont">
              <div className="pres-imgContDetail">
                <img src={preston.imgLink} alt="" />
              </div>
              <div className="pres-txtDetail">
                <div>
                  <h2>{preston.title}</h2>
                  <p>{preston.parah}</p>
                  <a href={preston.link} target="_blank" rel="noreferrer">
                    VisitPreston.com
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Preston;
