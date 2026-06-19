import { useState } from "react";

// Components
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import MyJourney from "./sections/MyJourney";
import MySkills from "./sections/MySkills";
import MyProjects from "./sections/MyProjects";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import MyCertificates from "./sections/MyCertificates";
import Navbar from "./sections/Navbar";
import ScrollToTop from "./components/ui/ScrollToTop";
import { IntlProvider } from "react-intl";
function App() {
  return (
    <div className="max-w-[95vw] md:max-w-[75vw] mx-auto pt-[5rem] pb-[3rem] px-2">
      <Navbar />
      <Hero />
      <AboutMe />
      <MyJourney />
      <MyProjects />

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
