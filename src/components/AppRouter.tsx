import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes } from "../utils/routes";
import { HOME_PAGE_ROUTE } from "../utils/consts";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {publicRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.element />}/>
            ))}
            <Route path="*" element={<Navigate to={HOME_PAGE_ROUTE}/>} />
        </Routes>
    );
}

export default AppRouter;