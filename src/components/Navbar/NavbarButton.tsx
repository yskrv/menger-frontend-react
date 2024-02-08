import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.scss";
import { HashLink } from "react-router-hash-link";

interface NavbarButtonProps {
	link: string;
	icon: IconDefinition;
	title: string;
	isInverse?: boolean;
	isHashLink?: boolean;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ link, icon, title, isInverse = false, isHashLink = false }) => {
	const classNames = isInverse ? styles["nav-btn__inverse"] : styles["nav-btn"];
	return isHashLink ? 
		<HashLink smooth to={link} className={classNames}>
			<FontAwesomeIcon icon={icon}/>
			{title}
		</HashLink> 
		: 
		<Link to={link} className={classNames}>
			<FontAwesomeIcon icon={icon}/>
			{title}
		</Link>;
}

export default NavbarButton;