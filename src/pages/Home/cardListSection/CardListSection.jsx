import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./CardListSection.scss";
import HebergementCard from "../cardListSection/hebergementCard/HebergementCard";

const CardListSection = () => {
  // useState est utilisé pour déclarer et gérer l'état dans un
  // composant fonctionnel React.
  const [hebergements, setHebergements] = useState([]); // S'assurer
  // que l'état initial est bien un tableau
  const navigate = useNavigate(); // Hook de navigation pour rediriger

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error(`Erreur réseau: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Format de données invalide: attendu un tableau.");
        }

        setHebergements(data);
      } catch (err) {
        console.error(err.message);
        navigate("*");
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
              // Concaténation. On passe la prop to à NavLink, elle indique la
              // destination du lien de navigation. Elle est construite
              // dynamiquement avec hebergement.id pour mener l'utilisateur vers
              // la fiche d'un hébergement.
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
