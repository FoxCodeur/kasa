import React from "react";
import { useParams } from "react-router-dom"; // Récupère l'ID depuis l'URL
import hebergements from "../../data.json";
import "./FichesLogement.scss";
// Il est très important d'utiliser useParams() pour récupérer l'ID depuis
// l'URL dans un contexte de routage dynamique, car cela permet de faire le
// lien entre l'URL et le contenu dynamique à afficher dans ta page. Sans cela,
// le routage dynamique ne fonctionnerait pas correctement.
const FicheLogement = () => {
  const { id } = useParams(); // Récupérer l’ID depuis l’URL
  console.log("ID récupéré :", id);
  const logement = hebergements.find((item) => item.id === id);

  if (!logement) {
    //plus tard pour afficher une page 404
    return <p>Logement non trouvé</p>;
  }

  return (
    <div className="fiche-logement">
      <div className="fiche-logement__cover">
        <img
          src={logement.cover}
          alt={logement.title}
          className="fiche-logement__cover-img" // Ajout de className
        />
      </div>
      <div className="fiche-logement__header">
        <h2 className="fiche-logement__title xl-font">{logement.title}</h2>
        {/* Section à droite avec 'name' et 'picture' */}
        <div className="fiche-logement__owner">
          <p>{logement.host.name}</p>
          <img
            className="fiche-logement__owner-picture"
            src={logement.host.picture}
          />
        </div>
        {/* Tags */}
      </div>
    </div>
  );
};

export default FicheLogement;
