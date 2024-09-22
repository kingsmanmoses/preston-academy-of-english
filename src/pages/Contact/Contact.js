import React, { useEffect, useState } from "react";
import "./contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FaHome, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
// import axios from "axios";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Preston Academy of English";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    nationality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Email sent successfully");
        e.target.reset();
        setFormData({
          name: "",
          email: "",
          message: "",
          country: "",
        });
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      alert("Error sending email");
    }
  };
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [phone, setPhone] = useState("");
  // const [nationality, setNationality] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3001/send", {
  //       name,
  //       email,
  //       phone,
  //       message,
  //       nationality
  //     });
  //     alert("Email sent successfully");
  //     e.target.reset();
  //   } catch (error) {
  //     alert("Error sending email");
  //   }
  // };
  return (
    <>
      <Header />
      <div className="contact-cont">
        <h2>Contact Us</h2>
        <div className="contact-detailCont">
          <h2>
            Here To <span>Help</span>
          </h2>
          <div className="contact-details">
            <div className="contact-leftDetailCont">
              <div className="each-leftDetail">
                <h3>Get In Touch</h3>
                <p>Looking for help? Fill the form to get in touch with us</p>
              </div>
              <div className="contact-line"></div>
              <div className="each-leftDetail">
                <h3>Office Address</h3>
                <p>
                  <span>
                    <FaHome />
                  </span>{" "}
                  93 Lancaster Rd, Preston PR1 2QJ
                </p>
              </div>
              <div className="each-leftDetail">
                <h3>Phone</h3>
                <p>
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  +44772 821039
                </p>
              </div>

              <div className="each-leftDetail">
                <h3>Email Contact</h3>
                <p>
                  <span>
                    <FaMailBulk />
                  </span>{" "}
                  info@prestonacademyofenglish.com
                </p>
              </div>
            </div>
            <div className="contact-formCont">
              <form onSubmit={handleSubmit} className="contact-formDetails">
                <div className="input-generalCont">
                  <div className="input-cont">
                    <label className="label">Full-Name:</label>
                    <input
                      className="input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full-name"
                      required
                    />
                  </div>
                  <div className="input-cont">
                    <label className="label">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="input"
                      required
                    />
                  </div>
                  <div className="input-cont">
                    <label className="label">Phone:</label>
                    <input
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="input-cont">
                    <label className="label">Nationality</label>
                    {/* //TODO: Don't forget the country stuff */}
                    <select
                      name="nationality"
                      className="input"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="input-cont">
                  <textarea
                    className="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                    placeholder="Write Your Message Please...."
                    required
                  />
                </div>
                <button type="submit" className="contactForm-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
