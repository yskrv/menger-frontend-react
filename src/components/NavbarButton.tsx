import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface NavbarButtonProps {
    link: string;
    icon: IconDefinition;
    title: string;
    isInverse: boolean;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ link, icon, title, isInverse }) => {
    return (
        <Link to={link} className={isInverse ? "nav-btn__inverse" : "nav-btn"}>
            <FontAwesomeIcon icon={icon}/>
            {title}
        </Link>
    );
}

export default NavbarButton;