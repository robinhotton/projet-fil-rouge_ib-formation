import { RouteObject, useRoutes } from "react-router";
import AdministrateurPage from "../pages/AdministrateurPage";
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
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
