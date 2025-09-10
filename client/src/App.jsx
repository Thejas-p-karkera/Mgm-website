import React from "react";
import { Routes, Route } from "react-router-dom";

// Header and Footer imports commented if unused
// import Header from "./Header";
// import Footer from "./Footer";

import Home from "./Components/Home & About/Pages/Home.jsx";
import Vision from './Components/Home & About/Pages/Vision.jsx';
import AmruthaMahotsava from "./Components/Home & About/Pages/Amrutha.jsx";
import Principal from './Components/Home & About/Pages/Principal.jsx';
import Contact from './Components/Home & About/Pages/ContactUs.jsx';
import Manage from './Components/Home & About/Pages/Management.jsx';
import History from './Components/Home & About/Pages/History.jsx';
import Gallery from "./Components/Home & About/Pages/Gallary.jsx";
import Apply from "./Components/Home & About/Pages/Apply.jsx";
import LogOut from "./Components/Home & About/Pages/LogOut.jsx";
import Rank from "./Components/Home & About/Pages/RankList.jsx";
import Swc from "./Components/Home & About/Pages/Swc25.jsx";

import Facilities from "./Components/Activities/Facilities/Facilities";
import WhatsNew from "./Components/Activities/WhatsNew/WhatsNew";
import Events from "./Components/Activities/Events/Events";
import Sports from "./Components/Activities/Sports/Sports";
import Clubs from "./Components/Activities/Clubs/Clubs";
import Alumni from "./Components/Activities/Alumni/Alumni";
import NccNss from "./Components/Activities/NccNss/NccNss";

import HeaderSection from "./Components/HeaderNavigation.jsx";
import ScrollToTop from "./Components/SlideTop.jsx";
import ScrollUpButton from "./Components/ScrollUpButton.jsx";
import Foot from "./Components/FooterTab.jsx";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <>
      {/* <Header /> */}
      <HeaderSection />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/apply" element={<Apply />} />
        <Route path="/amrutha-mahotsava" element={<AmruthaMahotsava />} />
        <Route path="/vision_mission" element={<Vision />} />
        <Route path="/vision-mission" element={<Vision />} /> 
        <Route path="/principal" element={<Principal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/management" element={<Manage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/history" element={<History />} />
        <Route path="/ranklist" element={<Rank />} />
        <Route path="/logout-event" element={<LogOut />} />
        <Route path="/swc25" element={<Swc />} />

        <Route path="/facilities" element={<Facilities />} />

        <Route path="/Alumni/Alumni" element={<Alumni />} />
        <Route path="/NccNss/NccNss" element={<NccNss />} />
        <Route path="/Clubs/Clubs" element={<Clubs />} />
        <Route path="/Sports/Sports" element={<Sports />} />
        <Route path="/whatsnew" element={<WhatsNew />} />

        <Route path="/events/*" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollUpButton />
      <Foot />
      {/* <Footer /> */}
    </>
  );
}

export default App;
