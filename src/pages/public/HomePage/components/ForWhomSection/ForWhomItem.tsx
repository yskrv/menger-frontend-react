import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ForWhomSection.module.scss";

interface ForWhomItemProps {
  title: string;
  text: string;
  iconColor: string;
  bgColor: string;
  icon: IconDefinition
}

const ForWhomItem: React.FC<ForWhomItemProps> = ({ title, text, iconColor, bgColor, icon }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon} style={{background: bgColor}}>
        <FontAwesomeIcon icon={icon} color={iconColor}/>
      </div>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default ForWhomItem;