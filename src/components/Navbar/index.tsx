import { Link } from "react-router-dom";
import {
  COURSES_PAGE_ROUTE,
  FAQ_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  SUPPORT_PAGE_ROUTE,
} from "../../utils/consts";
import NavbarButton from "./NavbarButton";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles["nav-part"]}>
          <Link to={HOME_PAGE_ROUTE} className={styles["nav-logo"]}>
            Men'ger
          </Link>
          <ul className={styles["nav-link-list"]}>
            <NavbarLink link={COURSES_PAGE_ROUTE} title="Курстар" />
            <NavbarLink link={FAQ_PAGE_ROUTE} title="Сұрақ & Жауап" />
            <NavbarLink link={SUPPORT_PAGE_ROUTE} title="Қолдау қызметі" />
          </ul>
        </div>
        <div className={styles["nav-part"]}>
          <NavbarButton
            link="/#form"
            title="Өтініш қалдыру"
            icon={faEnvelope}
            isInverse={true}
            isHashLink={true}
          />
          <NavbarButton
            link={LOGIN_PAGE_ROUTE}
            title="Кіру"
            icon={faRightToBracket}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
