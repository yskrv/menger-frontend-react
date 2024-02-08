import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  isLink?: boolean;
  link?: string;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  marginTop: number;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isLink = false, func, type = "button", link, marginTop, isLoading }) => {
  return (
    isLink ? 
      <Link style={{marginTop: `${marginTop}px`}} className={styles.button} to={link!}>{text}</Link> 
      : <button style={{marginTop: `${marginTop}px`}} type={type} className={styles.button} disabled={isLoading} onClick={func}>{text}</button>
  );
}

export default Button;