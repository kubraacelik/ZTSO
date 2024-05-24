import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SlideMenu from "../components/SlideMenu";
import Announcements from "../components/Announcements";
import Tenders from "../components/Tenders";
import Classifieds from "../components/Classifieds";
import OwlCarouselSlider from "../components/OwlCarouselSlider";
import PresidentSection from "../components/PresidentSection";
import Homegrid from "../components/Homegrid";
import Contact from "../components/Contact";
import Referance from "../components/Referance";
import Map from "../components/Map";
import Footer from "../components/Footer";

export const AnaSayfa = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <SlideMenu />
      <Announcements />
      <Tenders />
      <Classifieds />
      <OwlCarouselSlider />
      <PresidentSection />
      <Homegrid />
      <Contact />
      <Referance />
      <Map />
      <Footer />
    </div>
  );
};
