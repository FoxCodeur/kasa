import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.scss";
import AboutSectionBanner from "./AboutSectionBanner/AboutSectionBanner";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  const [principles, setPrinciples] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrinciples = async () => {
      try {
        const response = await fetch("/AboutList.json"); // Fetch pour récupérer les données

        // Vérification de la réponse HTTP
        if (!response.ok) {
          throw new Error(`Erreur réseau: ${response.status}`);
        }

        const data = await response.json(); // Conversion des données en JSON

        if (Array.isArray(data)) {
          setPrinciples(data);
        } else {
          throw new Error("Erreur lors de la récupération des principes");
        }
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
      {/* La condition {principles && principles.map(...)} permet de rendre le
      contenu du tableau principles uniquement lorsque celui-ci est chargé et
      disponible (c'est-à-dire lorsqu'il est différent de null ou undefined).  */}
      {principles &&
        principles.map((principle, index) => (
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
