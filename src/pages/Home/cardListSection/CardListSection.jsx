import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./CardListSection.scss";
import HebergementCard from "../cardListSection/hebergementCard/HebergementCard";

const CardListSection = () => {
  const [hebergements, setHebergements] = useState([]);
  const [error, setError] = useState(null); // Ajouter un état pour gérer l'erreur

  useEffect(() => {
    // Fonction asynchrone dans useEffect pour utiliser 'await'
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setHebergements(response.data); // Mise à jour de l'état avec les données
      } catch (err) {
        setError("Une erreur est survenue lors du chargement des données."); // Mise à jour de l'état en cas d'erreur
        console.error("Erreur lors de la récupération des données:", err); // Affichage de l'erreur dans la console
      }
    };

    fetchData(); // Appel de la fonction asynchrone
  }, []);

  return (
    <article className="card-list-article">
      <div className="card-list-section">
        {error ? ( // Affichage du message d'erreur si une erreur survient
          <div className="error-message">{error}</div>
        ) : (
          hebergements.map((hebergement) => (
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
          ))
        )}
      </div>
    </article>
  );
};

export default CardListSection;
