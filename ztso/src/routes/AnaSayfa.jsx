import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SlideMenu from "../components/SlideMenu";
import Announcements from "../components/Announcements";
// import Tenders from "../components/Tenders";
// import Classifieds from "../components/Classifieds";

export const AnaSayfa = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <SlideMenu />
      <Announcements />
      {/* <Tenders />
      <Classifieds /> */}
    </div>
  );
};
