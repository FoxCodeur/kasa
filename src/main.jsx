import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Composant qui permet la gestion du routage
import { BrowserRouter } from "react-router-dom";
import "./sass/index.scss";
import App from "./components/App/App.jsx";
//BrowserRouter est généralement préféré pour une application React moderne,
// à moins que vous n'ayez des contraintes de déploiement ou de serveur qui
//rendent HashRouter plus adapté.
// Créer la racine et rendre l'application avec StrictMode et HashRouter
createRoot(document.getElementById("root")).render(
  //On encapsule l'application dans StrictMode et HashRouter au lieu de BrowerRouter
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
