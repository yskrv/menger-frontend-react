import { AppRoute } from "./interfaces";
import { COURSES_PAGE_ROUTE, FAQ_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, SUPPORT_PAGE_ROUTE } from "./consts";
import FaqPage from "../pages/public/FaqPage";
import HomePage from "../pages/public/HomePage";
import SupportPage from "../pages/public/SupportPage";
import CoursesPage from "../pages/public/CoursesPage";
import RegisterPage from "../pages/public/RegisterPage";
import LoginPage from "../pages/public/LoginPage";

export const publicRoutes: AppRoute[] = [
    {
        path: HOME_PAGE_ROUTE,
        element: HomePage
    },
    {
        path: COURSES_PAGE_ROUTE,
        element: CoursesPage
    },
    {
        path: FAQ_PAGE_ROUTE,
        element: FaqPage
    },
    {
        path: SUPPORT_PAGE_ROUTE,
        element: SupportPage
    },
    {
        path: REGISTER_PAGE_ROUTE,
        element: RegisterPage
    }, 
    {
        path: LOGIN_PAGE_ROUTE,
        element: LoginPage
    }
];