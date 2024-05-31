import React from "react";
import "../styles/Projects.css";
import Navbar from "../components/Navbar";
import OwlCarouselSlider from "../components/OwlCarouselSlider";
import Footer from "../components/Footer";
import Project from "../components/Project";

export const Projects = () => {
  return (
    <div>
      <Navbar />
      <Project/>
      <OwlCarouselSlider />
      <Footer />
    </div>
  );
};
