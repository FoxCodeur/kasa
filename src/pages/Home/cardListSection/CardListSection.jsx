import React from "react";
import "./CardListSection.scss";
import hebergements from "../../../data.json";
import HebergementCard from "../cardListSection/hebergementCard/HebergementCard";
const CardListSection = () => {
  return (
    <article>
      {/* pour le key on peut choisir l'id ou alors l'index en deuxième paramètre */}
      <ul className="card-list-section">
        {hebergements.map((hebergement) => (
          <HebergementCard key={hebergement.id} title={hebergement.title} />
        ))}
      </ul>
    </article>
  );
};

export default CardListSection;
