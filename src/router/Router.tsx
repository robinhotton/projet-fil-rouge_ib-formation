import { RouteObject, useRoutes } from "react-router";
import AdministrateurPage from "../pages/administrateur/AdministrateurPage";
import AllPrestationsPage from "../pages/AllPrestationsPage";
import CategoriePage from "../pages/CategoriePage";
import ConnexionPage from "../pages/ConnexionPage";
import CreatePrestationPage from "../pages/CreatePrestationPage";
import EditPrestationPage from "../pages/EditPrestationPage";
import InscriptionEntreprisePage from "../pages/inscriptionPrestarairePage/InscriptionEntreprisePage";
import InscriptionPage from "../pages/inscription/InscriptionPage";
import LandingPage from "../pages/landing/LandingPage";
import PanierPage from "../pages/PanierPage";
import PrestationPage from "../pages/PrestationPage";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "prestation",
      element: <AllPrestationsPage />,
    },
    {
      path: "prestation/:id",
      element: <PrestationPage />,
    },
    {
      path: "prestation/create",
      element: <CreatePrestationPage />,
    },
    {
      path: "prestation/edit/:id",
      element: <EditPrestationPage />,
    },
    {
      path: "/categorie",
      element: <></>,
    },
    {
      path: "/categorie/:id",
      element: <CategoriePage />,
    },
    {
      path: "/connexion",
      element: <ConnexionPage />,
    },
    {
      path: "/inscription/client",
      element: <InscriptionPage />,
    },
    {
      path: "/inscription/entreprise",
      element: <InscriptionEntreprisePage />,
    },
    {
      path: "/panier",
      element: <PanierPage />,
    },
    {
      path: "/admin",
      element: <AdministrateurPage />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
