import { ChangeEvent } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "./Input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputProps {
  title: string;
  placeholder: string;
  icon: IconDefinition;
  value: string;
  setValue: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ title, placeholder, icon, value, setValue }) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.block}>
        <input 
          type="text" 
          className={styles.input} 
          placeholder={placeholder} 
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
        />
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon}/>
        </div>
      </div>
    </div>
  );
}

export default Input;