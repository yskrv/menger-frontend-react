import { AppRoute } from "./interfaces/general";
import { COURSES_PAGE_ROUTE, COURSE_PAGE_ROUTE, DASHBOARD_COURSES_PAGE_ROUTE, DASHBOARD_MAIN_PAGE_ROUTE, DASHBOARD_SUPPORT_PAGE_ROUTE, FAQ_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, SUPPORT_PAGE_ROUTE, DASHBOARD_CREATE_COURSE_PAGE_ROUTE, DASHBOARD_PROFILE_PAGE_ROUTE, DASHBOARD_APPLICATIONS_PAGE_ROUTE, DASHBOARD_USERS_PAGE_ROUTE } from "./consts";
import FaqPage from "../pages/public/FaqPage";
import HomePage from "../pages/public/HomePage";
import SupportPage from "../pages/public/SupportPage";
import DashboardSupportPage from "../pages/private/SupportPage";
import CoursesPage from "../pages/public/CoursesPage";
import DashboardCoursesPage from "../pages/private/CoursesPage";
import RegisterPage from "../pages/public/RegisterPage";
import LoginPage from "../pages/public/LoginPage";
import MainPage from "../pages/private/MainPage";
import CoursePage from "../pages/public/CoursePage";
import CreateCoursePage from "../pages/private/CreateCoursePage";
import ProfilePage from "../pages/private/ProfilePage";
import ApplicationsPage from "../pages/private/ApplicationsPage";
import UsersPage from "../pages/private/UsersPage";

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
    path: COURSE_PAGE_ROUTE,
    element: CoursePage
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

export const privateRoutes: AppRoute[] = [
  {
    path: DASHBOARD_MAIN_PAGE_ROUTE,
    element: MainPage
  },
  {
    path: DASHBOARD_COURSES_PAGE_ROUTE,
    element: DashboardCoursesPage
  },
  {
    path: DASHBOARD_SUPPORT_PAGE_ROUTE,
    element: DashboardSupportPage
  },
  {
    path: DASHBOARD_CREATE_COURSE_PAGE_ROUTE,
    element: CreateCoursePage
  },
  {
    path: DASHBOARD_PROFILE_PAGE_ROUTE,
    element: ProfilePage
  },
  {
    path: DASHBOARD_APPLICATIONS_PAGE_ROUTE,
    element: ApplicationsPage
  },
  {
    path: DASHBOARD_USERS_PAGE_ROUTE,
    element: UsersPage
  }
];