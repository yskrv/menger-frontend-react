import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";

interface SidebarLinkProps {
  isLink?: boolean;
  link?: string;
  text: string;
  icon: IconDefinition;
  func?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  isLink = true,
  link,
  text,
  icon,
  func,
}) => {
  return isLink ? (
    <Link className={styles.link} to={link!}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </Link>
  ) : (
    <button className={classNames(styles.link, styles.logout)} onClick={func}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </button>
  );
};

export default SidebarLink;
