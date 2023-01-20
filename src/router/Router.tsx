import { RouteObject, useRoutes } from "react-router";
import AdministrateurPage from "../pages/AdministrateurPage";
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
      path: "/:id",
      element: <PrestationPage />,
    },
    {
      path: "/admin",
      element: <AdministrateurPage />,
    },
    {
      path: "/create",
      element: <CreatePrestationPage />,
    },
    {
      path: "/edit/:id",
      element: <EditPrestationPage />,
    },
    {
      path: "/categorie",
      element: <CategoriePage />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
