import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import classNames from "classnames";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Input.module.scss";

interface InputProps {
  isTextarea?: boolean;
  title: string;
  placeholder: string;
  icon: IconDefinition;
  type?: HTMLInputTypeAttribute;
  value: string;
  setValue: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ isTextarea = false, title, placeholder, icon, type = "text", value, setValue }) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.block}>
        {
          isTextarea ? 
          <textarea 
            placeholder={placeholder} 
            className={classNames(styles.input, styles.textarea)} 
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
          ></textarea> 
          : 
          <input 
            type={type} 
            className={styles.input} 
            placeholder={placeholder} 
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
          />
        }
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon}/>
        </div>
      </div>
    </div>
  );
}

export default Input;