import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./FichesLogement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FicheLogement = () => {
  const { id } = useParams(); // Récupérer l’ID depuis l’URL
  const navigate = useNavigate();
  // on utilise null et pas vide car il s'agit d'un objet unique
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        const leLogementExiste = response.data.find((item) => item.id === id);

        if (!leLogementExiste) {
          navigate("*"); // Redirection vers la page 404 si l'ID n'existe pas
        } else {
          setLogement(leLogementExiste);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des données:", err);
        navigate("*"); // Redirection en cas d'erreur
      }
    };

    fetchData();
  }, [id, navigate]);

  return (
    logement && (
      <div className="fiche-logement">
        <div className="fiche-logement__cover">
          <img
            src={logement.cover}
            alt={logement.title}
            className="fiche-logement__cover-img"
          />
        </div>

        <div className="fiche-logement__header">
          <div className="fiche-logement__info-container">
            <h2 className="fiche-logement__title xl-font">{logement.title}</h2>
            <p className="fiche-logement__location">{logement.location}</p>
          </div>

          <div className="fiche-logement__owner">
            <p className="fiche-logement__owner-name">
              <span className="prenom">{logement.host.name.split(" ")[0]}</span>
              <span className="nom">{logement.host.name.split(" ")[1]}</span>
            </p>
            <div className="fiche-logement__owner-picture-container">
              <img
                className="fiche-logement__owner-picture"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
          </div>
        </div>

        <div className="fiche-logement__rating-tags-container">
          <div className="fiche-logement__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="fiche-logement__tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="fiche-logement__rating">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={
                  index < logement.rating
                    ? "fiche-logement__star--red"
                    : "fiche-logement__star--gray"
                }
              />
            ))}
          </div>
        </div>

        <div className="fiche-logement__details">
          <details className="fiche-logement__description">
            <summary>Description</summary>
            <div className="summary-content">
              <p>{logement.description}</p>
            </div>
          </details>
          <details className="fiche-logement__equipments">
            <summary>Équipements</summary>
            <div className="summary-content">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    )
  );
};

export default FicheLogement;
