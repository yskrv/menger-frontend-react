import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../utils/routes";
import { DASHBOARD_MAIN_PAGE_ROUTE, HOME_PAGE_ROUTE } from "../utils/consts";
import { AppRoute } from "../utils/interfaces/general";
import { useAuth } from "../hooks/useAuth";

const AppRouter: React.FC = () => {
  const isAuth = useAuth();
  const routes: AppRoute[] = isAuth ? privateRoutes : publicRoutes;
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      <Route
        path="*"
        element={
          <Navigate to={isAuth ? DASHBOARD_MAIN_PAGE_ROUTE : HOME_PAGE_ROUTE} />
        }
      />
    </Routes>
  );
};

export default AppRouter;
