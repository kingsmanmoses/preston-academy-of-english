import React, { useEffect } from "react";
import "./preston.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const aboutPrestonData = [
  {
    title: "Shopping",
    parah:
      "As one of Lancashire's largest shopping destinations, Preston packs in a real punch when it comes to the city's retail offer. Expect a large selection of famous brands, alongside a mix of quality independent shops found on the high street and pocketed down the city's numerous quaint side streets - such as the characterful Cannon Street and the charming period-style cobbled streets of Winckley Street. The city centre also offers a number of shopping centres, including the grand Victorian grade II listed Miller Arcade (Modelled on London's historic Burlington Arcade), and bustling markets offering fresh Lancashire produce, a range of retail stalls and plenty of inviting eats. ",
    link: "https://www.visitpreston.com/shopping",
    imgLink:
      "https://images.pexels.com/photos/7987590/pexels-photo-7987590.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Food and drink in Preston",
    parah:
      "Whether you're after a full fine dining experience or more casual affair, the city offers an extensive choice of restaurants serving up fabulous food from around the world to whet your appetite. The city also has a thriving cafe scene with a great choice of coffeehouses and plenty of places to enjoy lunch. With a wide variety of eat in or or grab and go options, Preston has it covered.",
    link: "https://www.visitpreston.com/food-and-drink",
    imgLink:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    title: "Things to do in Preston",
    parah:
      "Venture into the city centre and you'll find a wealth of indoor fun to keep the whole family entertained. The city also boasts a vibrant arts and cultural scene with a wide mix of museums and exhibition spaces to explore. If it's outdoor activities you're after, Preston offers a number of fantastic parks, gardens and city trails, as well as the Guild Wheel - a diverse 21-mile route providing the perfect opportunity for a challenging and enjoyable day of cycling. Alternatively, enjoy the city's surrounding scenery from the comfort of your carriage with a ride on a heritage steam train at Ribble Steam Railway, located on Preston Docks - the city's historical waterfront.",
    link: "https://www.visitpreston.com/things-to-see-and-do",
    imgLink:
      "https://images.pexels.com/photos/4997840/pexels-photo-4997840.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "All About Preston Blog",
    parah:
      "Let our Visit Blog inspire your trip to Preston with insider information on awesome things to do, hidden gems to discover, seasonal lists, plus current events and happenings around the city - all in one handy place. If you're interested in finding out about the latest investment and business news taking place across the city, Visit the link below ",
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
