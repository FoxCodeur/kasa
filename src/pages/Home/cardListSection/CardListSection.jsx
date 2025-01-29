import React from "react";
import "./CardListSection.scss";
import hebergements from "../../../data.json";
import HebergementCard from "../cardListSection/hebergementCard/HebergementCard";
const CardListSection = () => {
  return (
    <div className="card-list-section">
      {hebergements.map((hebergement) => (
        <HebergementCard key={hebergement.id} title={hebergement.title} />
      ))}
    </div>
  );
};

export default CardListSection;
