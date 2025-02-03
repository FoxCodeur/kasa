import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./CardListSection.scss";
import HebergementCard from "../cardListSection/hebergementCard/HebergementCard";

const CardListSection = () => {
  // useState permet de mettre à jour la valeur de 'hebergements'
  const [hebergements, setHebergements] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setHebergements(response.data);
    });
  }, []);

  return (
    <article className="card-list-article">
      <div className="card-list-section">
        {hebergements.map((hebergement) => (
          <NavLink
            key={hebergement.id}
            to={`/fiche-logement/${hebergement.id}`}
            className="card-link"
          >
            <HebergementCard
              title={hebergement.title}
              cover={hebergement.cover}
            />
          </NavLink>
        ))}
      </div>
    </article>
  );
};

export default CardListSection;
