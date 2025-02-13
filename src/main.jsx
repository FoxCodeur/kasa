import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Composant qui permet la gestion du routage
import { HashRouter } from "react-router-dom";
import "./sass/index.scss";
import App from "./components/App/App.jsx";

// Créer la racine et rendre l'application avec StrictMode et HashRouter
createRoot(document.getElementById("root")).render(
  //On encapsule l'application dans StrictMode et HashRouter
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
