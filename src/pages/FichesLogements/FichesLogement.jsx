import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./FichesLogement.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Collapse from "../../components/Collapse/Collapse"; // Importation du composant Collapse
import SlideShow from "./SlideShow/SlideShow";
const FicheLogement = () => {
  const { id } = useParams(); // Récupérer l’ID depuis l’URL
  const navigate = useNavigate();
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
        <SlideShow images={logement.pictures} />

        {/* Container parent pour regrouper les informations et la notation */}
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
                <span className="fiche-logement__owner-firstname">
                  {logement.host.name.split(" ")[0]}
                </span>
                <span className="fiche-logement__owner-lastname">
                  {logement.host.name.split(" ")[1]}
                </span>
              </p>
              <div className="fiche-logement__owner-picture-container">
                <img
                  className="fiche-logement__owner-picture"
                  src={logement.host.picture}
                  alt={logement.host.name}
                />
              </div>
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
        </div>

        {/* Utilisation du composant Collapse pour gérer la description */}
        <Collapse
          title="Description"
          content={<p>{logement.description}</p>}
          className="fiche-logement__description"
        />

        {/* Utilisation du composant Collapse pour gérer les équipements */}
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
          className="fiche-logement__equipments"
        />
      </div>
    )
  );
};

export default FicheLogement;
