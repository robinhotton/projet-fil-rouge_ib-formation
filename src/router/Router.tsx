import { RouteObject, useRoutes } from "react-router";
import AdministrateurPage from "../pages/AdministrateurPage";
import CreatePrestationPage from "../pages/CreatePrestationPage";
import EditPrestationPage from "../pages/EditPrestationPage";
import LandingPage from "../pages/LandingPage";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <LandingPage />,
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
      path: "/categories",
      element: <CategoriesPage />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
