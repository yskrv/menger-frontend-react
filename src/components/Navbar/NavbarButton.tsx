import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.scss";

interface NavbarButtonProps {
    link: string;
    icon: IconDefinition;
    title: string;
    isInverse: boolean;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ link, icon, title, isInverse }) => {
    return (
        <Link to={link} className={isInverse ? styles["nav-btn__inverse"] : styles["nav-btn"]}>
            <FontAwesomeIcon icon={icon}/>
            {title}
        </Link>
    );
}

export default NavbarButton;