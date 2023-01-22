import { RouteObject, useRoutes } from "react-router";
import AdministrateurPage from "../pages/AdministrateurPage";
import AllPrestationsPage from "../pages/AllPrestationsPage";
import CategoriePage from "../pages/CategoriePage";
import CreatePrestationPage from "../pages/CreatePrestationPage";
import EditPrestationPage from "../pages/EditPrestationPage";
import LandingPage from "../pages/LandingPage";
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
      path: "/categorie/:id",
      element: <CategoriePage />,
    },
    {
      path: "/admin",
      element: <AdministrateurPage />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
