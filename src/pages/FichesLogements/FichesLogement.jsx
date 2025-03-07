import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./FichesLogement.scss";
import Collapse from "../../components/Collapse/Collapse";
import SlideShow from "../../components/SlideShow/SlideShow";
import Stars from "../../components/Stars/Stars";

const FicheLogement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Dans FicheLogement, l'état logement représente un seul objet
  // (et non une liste d'éléments). Il peut être soit :
  // null au départ (aucune donnée chargée),
  // un objet contenant les infos d’un logement une fois l’API chargée.
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }

        const data = await response.json();
        const foundLogement = data.find((item) => item.id === id);

        if (!foundLogement) {
          throw new Error(`Le logement avec l'ID ${id} n'a pas été trouvé.`);
        }
        const rating = Number(foundLogement.rating);
        // "Si la valeur de rating n'est pas un nombre valide".
        if (isNaN(rating)) {
          throw new Error("Le rating du logement est invalide.");
        }

        foundLogement.rating = rating; // Attribution du rating converti en nombre
        setLogement(foundLogement);
      } catch (err) {
        console.error("Erreur lors de la récupération des données:", err);
        navigate("*");
      }
    };

    fetchData();
  }, [id, navigate]);
  // null indique clairement que les données ne sont pas encore chargées
  if (!logement) return null; // Évite un rendu inutile avant le chargement des données

  return (
    <div className="fiche-logement">
      <SlideShow images={logement.pictures} />

      <div className="fiche-logement__info-rating-container">
        {/* Infos générales + Tags */}
        <div className="fiche-logement__info-tags">
          <div className="fiche-logement__info-container">
            <h2 className="fiche-logement__title">{logement.title}</h2>
            <p className="fiche-logement__location">{logement.location}</p>
          </div>

          <div className="fiche-logement__tags-container">
            {logement.tags.map((tag, index) => (
              <span key={index} className="fiche-logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Propriétaire + Notation */}
        <div className="fiche-logement__owner-rating">
          <div className="fiche-logement__owner">
            <p className="fiche-logement__owner-name">
              {logement.host.name.split(" ").map((part, index) => (
                <span
                  key={index}
                  className={`fiche-logement__owner-${
                    index === 0 ? "firstname" : "lastname"
                  }`}
                >
                  {part}
                </span>
              ))}
            </p>
            <div className="fiche-logement__owner-picture-container">
              <img
                className="fiche-logement__owner-picture"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
          </div>

          <Stars rating={logement.rating} />
        </div>
      </div>

      {/* Description et équipements avec Collapse */}
      <Collapse
        title="Description"
        content={logement.description}
        className="fiche-logement__description"
      />
      <Collapse
        title="Équipements"
        content={
          <ul>
            {logement.equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        }
        className="fiche-logement__equipments"
      />
    </div>
  );
};

export default FicheLogement;
