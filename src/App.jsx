import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Facilities from "./Facilities";
import WhatsNew from "./WhatsNew";


// Dummy components for demo
function Home() {
  return <div className="p-8">Welcome to Home Page</div>;
}
function VisionMission() {
  return <div className="p-8">Vision & Mission content here</div>;
}
function Principal() {
  return <div className="p-8">Principal content here</div>;
}
function Management() {
  return <div className="p-8">Management content here</div>;
}
function History() {
  return <div className="p-8">History content here</div>;
}
function Gallery() {
  return <div className="p-8">Image Gallery content here</div>;
}
function Contact() {
  return <div className="p-8">Contact us content here</div>;
}
// Add more dummy components as needed from nav

export default function App() {
  return (
    <Router>

      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/management" element={<Management />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Faculty and Campus */}
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />


        {/* Add more routes and dummy components as necessary */}

        {/* Activities */}
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/WhatsNew" element={<WhatsNew />} />
      </Routes>

      <Footer />

    </Router>
  );
}