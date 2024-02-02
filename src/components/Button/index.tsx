import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  isLink: boolean;
  link?: string;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  marginTop: number;
}

const Button: React.FC<ButtonProps> = ({ text, isLink, func, color = 'green', link, marginTop }) => {
  return (
    isLink ? 
      <Link style={{marginTop: `${marginTop}px`}} className={styles.button} to={link!}>{text}</Link> 
      : <button className={styles.button} onClick={func}>{text}</button>
  );
}

export default Button;