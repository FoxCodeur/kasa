import React from "react";
import "./About.scss";
import AboutSectionBanner from "./AboutSectionBanner/AboutSectionBanner";
import Collapse from "./Collapse/Collapse";
const About = () => {
  return (
    <div className="about">
      <AboutSectionBanner />
      <Collapse />
    </div>
  );
};

export default About;
