import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
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
        const response = await axios.get("/data.json");
        // Array.isArray() est une méthode JavaScript qui permet de vérifier si
        // une valeur est un tableau (array). Elle retourne true si l'argument
        // passé est un tableau, sinon elle retourne false.
        if (!Array.isArray(response.data)) {
          throw new Error(
            "Données non valides reçues pour les cards, attendu un tableau."
          );
        }
        //  fonction de mise à jour de l'état
        setHebergements(response.data);
      } catch (err) {
        // On affiche directement l'erreur avec un message explicite
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
              // Concaténation. On passes la prop to à NavLink, elle indique la
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
