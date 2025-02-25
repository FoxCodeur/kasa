import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.scss";
import AboutSectionBanner from "./AboutSectionBanner/AboutSectionBanner";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  const [principles, setPrinciples] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrinciples = async () => {
      try {
        const response = await fetch("/AboutList.json");
        if (!response.ok) throw new Error(`Erreur réseau: ${response.status}`);

        const data = await response.json();
        if (!Array.isArray(data))
          throw new Error("Format de données invalide: attendu un tableau.");

        setPrinciples(data);
      } catch (err) {
        console.error(err.message);
        navigate("*");
      }
    };

    fetchPrinciples();
  }, [navigate]);

  return (
    <div className="about">
      <AboutSectionBanner />
      {/* Si principles est un tableau vide, rien ne sera affiché, mais le map() sera sans erreur. */}
      {principles.map((principle, index) => (
        <Collapse
          key={index}
          title={principle.title}
          content={principle.content}
          fullWidth={true}
        />
      ))}
    </div>
  );
};

export default About;
