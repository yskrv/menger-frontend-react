import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./Navbar.module.scss";

interface NavbarLinkProps {
  link: string;
  title: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ link, title }) => {
  const location = useLocation();
  const classes = location.pathname === link ? classNames(styles["nav-link-item"], styles["nav-link-item__active"]) : styles["nav-link-item"];
  return (
    <li className={classes}><Link to={link}>{title}</Link></li>
  )
}

export default NavbarLink;