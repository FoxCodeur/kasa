import React from "react";
import { useParams } from "react-router-dom"; // Récupère l'ID depuis l'URL
import hebergements from "../../data.json";
import "./FichesLogement.scss";

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
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <img src={logement.cover} alt={logement.title} />
    </div>
  );
};

export default FicheLogement;
