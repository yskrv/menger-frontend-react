import { Link } from "react-router-dom";
import { COURSES_PAGE_ROUTE, FAQ_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, SUPPORT_PAGE_ROUTE } from "../../utils/consts";
import NavbarButton from "./NavbarButton";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles["nav-part"]}>
                    <Link to={HOME_PAGE_ROUTE} className={styles["nav-logo"]}>Men'ger</Link>
                    <ul className={styles["nav-link-list"]}>
                        <li className={styles["nav-link-item"]}><Link to={COURSES_PAGE_ROUTE}>Курстар</Link></li>
                        <li className={styles["nav-link-item"]}><Link to={FAQ_PAGE_ROUTE}>Сұрақ & Жауап</Link></li>
                        <li className={styles["nav-link-item"]}><Link to={SUPPORT_PAGE_ROUTE}>Қолдау қызметі</Link></li>
                    </ul>
                </div>
                <div className={styles["nav-part"]}>
                    <NavbarButton
                        link="/"
                        title="Өтініш қалдыру"
                        icon={faEnvelope}
                        isInverse={true}
                    />
                    <NavbarButton
                        link={LOGIN_PAGE_ROUTE}
                        title="Кіру"
                        icon={faRightToBracket}
                        isInverse={false}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;