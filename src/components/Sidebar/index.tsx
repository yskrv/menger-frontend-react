import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faHouse,
  faListCheck,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  DASHBOARD_APPLICATIONS_PAGE_ROUTE,
  DASHBOARD_COURSES_PAGE_ROUTE,
  DASHBOARD_MAIN_PAGE_ROUTE,
  DASHBOARD_PROFILE_PAGE_ROUTE,
  DASHBOARD_SUPPORT_PAGE_ROUTE,
  DASHBOARD_USERS_PAGE_ROUTE,
} from "../../utils/consts";
import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { deleteActiveUser } from "../../redux/slices/user.slice";
import { User } from "../../utils/interfaces/userInterfaces";
import SidebarLink from "./SidebarLink";
import styles from "./Sidebar.module.scss";
import { RootState } from "../../redux/store";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const user: User | null = useAppSelector(
    (state: RootState) => state.user.user
  );

  const signOut = () => {
    localStorage.removeItem("token");
    dispatch(deleteActiveUser(null));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <h1 className={styles.logo}>Men'ger</h1>
        <SidebarLink
          link={DASHBOARD_MAIN_PAGE_ROUTE}
          text="Бастысы"
          icon={faHouse}
        />
        <SidebarLink
          link={DASHBOARD_PROFILE_PAGE_ROUTE}
          text="Менің аккаунтым"
          icon={faUser}
        />
        <SidebarLink
          link={DASHBOARD_COURSES_PAGE_ROUTE}
          text="Курстар"
          icon={faLeanpub}
        />
        {user?.type === "admin" && (
          <SidebarLink
            link={DASHBOARD_SUPPORT_PAGE_ROUTE}
            text="Сұрақтар"
            icon={faCircleQuestion}
          />
        )}
        {user?.type === "admin" && (
          <SidebarLink
            link={DASHBOARD_APPLICATIONS_PAGE_ROUTE}
            text="Өтініштер"
            icon={faListCheck}
          />
        )}
        {user?.type === "manager" && (
          <SidebarLink
            link={
              DASHBOARD_USERS_PAGE_ROUTE.substring(
                0,
                DASHBOARD_USERS_PAGE_ROUTE.length - 3
              ) + user.organizationId
            }
            text="Пайдаланушылар"
            icon={faUsers}
          />
        )}
      </div>
      <div>
        <SidebarLink
          isLink={false}
          text="Шығу"
          func={signOut}
          icon={faArrowRightFromBracket}
        />
      </div>
    </div>
  );
};

export default Sidebar;
