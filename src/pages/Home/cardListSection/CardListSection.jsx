import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CardListSection.scss";
import HebergementCard from "../cardListSection/hebergementCard/HebergementCard";

const CardListSection = () => {
  const [hebergements, setHebergements] = useState([]); // S'assurer
  // que l'état initial est bien un tableau
  const navigate = useNavigate(); // Hook de navigation pour rediriger l'utilisateur

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");

        if (!Array.isArray(response.data)) {
          throw new Error("Format de données incorrect.");
        }

        setHebergements(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des données:", err);
        navigate("*"); // Redirection vers la page d'erreur (route 404 ou personnalisée)
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <article className="card-list-article">
      <div className="card-list-section">
        {Array.isArray(hebergements) &&
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
          ))}
      </div>
    </article>
  );
};

export default CardListSection;
