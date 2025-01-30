import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FicheLogement from "../pages/FichesLogements/FichesLogement"; // Vérifie bien le chemin !
// Dans React Router v6, toutes les routes sont strictement exactes par défaut.
// Plus besoin de exact: true, car les routes ne font plus de correspondances partielles comme dans la version précédente.
const routesConfig = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/fiche-logement/:id", element: FicheLogement }, // Cette route est dynamique
  { path: "*", element: ErrorPage },
];

export default routesConfig;
