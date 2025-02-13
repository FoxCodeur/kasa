import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Composant qui permet la gestion du routage
import { BrowserRouter } from "react-router-dom";
import "./sass/index.scss";
import App from "./components/App/App.jsx";

// Créer la racine et rendre l'application avec StrictMode et BrowserRouter
createRoot(document.getElementById("root")).render(
  //On encapsule l'application dans StrictMode et BrowserRouter
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
