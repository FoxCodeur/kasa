import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.scss";
import AboutSectionBanner from "./AboutSectionBanner/AboutSectionBanner";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  const [principles, setPrinciples] = useState([]);

  useEffect(() => {
    const fetchPrinciples = async () => {
      try {
        const response = await axios.get("/AboutList.json");
        setPrinciples(response.data);
      } catch (err) {
        console.error("Error fetching principles:", err);
      }
    };
    fetchPrinciples();
  }, []);

  return (
    <div className="about">
      <AboutSectionBanner />
      {principles.map((principle, index) => (
        <Collapse
          key={index}
          title={principle.title}
          content={principle.content}
          fullWidth={true} // Ajout de la prop pour élargir à 100%
        />
      ))}
    </div>
  );
};

export default About;
