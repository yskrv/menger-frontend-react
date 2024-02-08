import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from "../../../../../utils/consts";
import { AuthLink } from "../../../../../utils/interfaces/general";
import styles from "./AuthLinks.module.scss";

const AuthLinks: React.FC = () => {
  const location = useLocation();

  const links: AuthLink[] = [
    {
      link: LOGIN_PAGE_ROUTE,
      name: "Кіру"
    }, 
    {
      link: REGISTER_PAGE_ROUTE,
      name: "Тіркелу"
    }
  ];

  return (
    <div>{
      links.map(({ link, name }) => (<Link className={
        location.pathname === link ? classNames(styles.item, styles.item__active) : styles.item
      } to={link}>{name}</Link>))
    }</div>
  );
}

export default AuthLinks;