import { RouteObject, useRoutes } from "react-router";
import LandingPage from "../pages/LandingPage";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/home",
      element: <LandingPage />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};
export default Router;
