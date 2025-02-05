import React from "react";
import { useParams } from "react-router-dom"; // Récupère l'ID depuis l'URL
import hebergements from "../../data.json";
import "./FichesLogement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FicheLogement = () => {
  const { id } = useParams(); // Récupérer l’ID depuis l’URL
  console.log("ID récupéré :", id);
  const logement = hebergements.find((item) => item.id === id);

  if (!logement) {
    // Plus tard pour afficher une page 404
    return <p>Logement non trouvé</p>;
  }

  return (
    <div className="fiche-logement">
      <div className="fiche-logement__cover">
        <img
          src={logement.cover}
          alt={logement.title}
          className="fiche-logement__cover-img"
        />
      </div>
      <div className="fiche-logement__header">
        {/* Conteneur ajouté autour du titre et de la localisation */}
        <div className="fiche-logement__info-container">
          <h2 className="fiche-logement__title xl-font">{logement.title}</h2>
          <p className="fiche-logement__location">{logement.location}</p>
        </div>
        {/* Section à droite avec 'name' et 'picture' */}
        <div className="fiche-logement__owner">
          <p className="fiche-logement__owner-name">
            <span className="prenom">{logement.host.name.split(" ")[0]}</span>
            <span className="nom">{logement.host.name.split(" ")[1]}</span>
          </p>
          {/* Prénom et nom */}
          <div className="fiche-logement__owner-picture-container">
            <img
              className="fiche-logement__owner-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
        </div>
      </div>

      {/* Conteneur parent autour des sections Rating et Tags */}
      <div className="fiche-logement__rating-tags-container">
        <div className="fiche-logement__tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="fiche-logement__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="fiche-logement__rating">
          {/* 5 étoiles grises fixes */}
          <div className="stars-background">
            <FontAwesomeIcon
              icon={faStar}
              className="fiche-logement__star--gray"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="fiche-logement__star--gray"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="fiche-logement__star--gray"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="fiche-logement__star--gray"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="fiche-logement__star--gray"
            />
          </div>
        </div>
      </div>

      <div className="fiche-logement__details">
        <details>
          <summary>Description</summary>
          <div className="summary-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            facere adipisci dicta in aliquid, similique sunt qui ipsam tempora
            dolores eligendi, magnam assumenda repellat sequi error vero sit hic
            totam blanditiis recusandae veniam. Quisquam ea enim asperiores
            nobis vel. Quos sint assumenda reiciendis temporibus soluta tempore,
            sapiente quidem labore voluptates!
          </div>
        </details>
        <details className="fiche-logement__equipments">
          <summary>Équipements</summary>
          <div className="summary-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            facere adipisci dicta in aliquid, similique sunt qui ipsam tempora
            dolores eligendi, magnam assumenda repellat sequi error vero sit hic
            totam blanditiis recusandae veniam. Quisquam ea enim asperiores
            nobis vel. Quos sint assumenda reiciendis temporibus soluta tempore,
            sapiente quidem labore voluptates!
          </div>
        </details>
      </div>
    </div>
  );
};

export default FicheLogement;
