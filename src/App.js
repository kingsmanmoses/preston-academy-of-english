import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHomePage from "./pages/home/MainHomePage";
import Course from "./pages/Courses/Course";
import GeneralEnglish from "./subpages/courses-subpages/general-english/GeneralEnglish";
import EnglishIELTS from "./subpages/courses-subpages/english-ielts/EnglishIELTS";
import EnglishPrepCours from "./subpages/courses-subpages/english-prepCours/EnglishPrepCours";
import OneofOne from "./subpages/courses-subpages/oneofone/OneofOne";
import UKVISelt from "./subpages/courses-subpages/ukvi-selt/UKVISelt";
import Contact from "./pages/Contact/Contact";
import Preston from "./pages/About Preston/Preston";
import About from "./pages/About/About";
import UKVI from "./pages/UKVI Exams/UKVI";
import StudentAccom from "./subpages/Ukvi-subpages/student-accom/StudentAccom";
import ApplyStud from "./subpages/Ukvi-subpages/apply-student/ApplyStud";
// import Whatsapp from "./components/whatsappComp/Whatsapp";
import ScrollToTop from "./components/scrolltoTop/ScrollToTop";
import A1LearnMore from "./components/resuseable_ui/ukvi_examsPage/A1LearnMore";
import A2 from "./components/resuseable_ui/ukvi_examsPage/A2";
import B1 from "./components/resuseable_ui/ukvi_examsPage/B1";
import B1_B2 from "./components/resuseable_ui/ukvi_examsPage/B1_B2";
import C1_C2 from "./components/resuseable_ui/ukvi_examsPage/C1_C2";
import TawkTo from "./components/chatwidget/TawkTo";
import PriceList from "./subpages/Ukvi-subpages/price-list/PriceList";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <TawkTo />
        <Routes>
          <Route path="/" element={<MainHomePage />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/general-english" element={<GeneralEnglish />} />
          <Route path="/english-ielts" element={<EnglishIELTS />} />
          <Route path="/speaking-skills" element={<EnglishPrepCours />} />
          <Route path="/onetoone" element={<OneofOne />} />
          <Route path="/ukvi-test" element={<UKVISelt />} />
          <Route path="/about-preston-academy-of-english" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ukvi">
            <Route index element={<UKVI />} />
            <Route path="a1-test" element={<A1LearnMore />} />
            <Route path="a2-test" element={<A2 />} />
            <Route path="b1-test" element={<B1 />} />
            <Route path="b1-b2-test" element={<B1_B2 />} />
            <Route path="c1-c2-test" element={<C1_C2 />} />
          </Route>
          <Route path="/about-preston" element={<Preston />} />
          <Route path="/student-accommodation" element={<StudentAccom />} />
          <Route path="/apply-now" element={<ApplyStud />} />
          <Route path="/price-list" element={<PriceList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
