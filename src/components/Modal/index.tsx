import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Modal.module.scss";

interface ModalProps {
  imageUrl: string;
  title: string;
  text: string;
  setIsOpen: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, title, text, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <FontAwesomeIcon icon={faX} className={styles.close} onClick={closeModal}/>
        </div>
        <div className={styles.body}>
          <div className={styles.part}>
            <img src={imageUrl} className={styles.image} alt={title} />
          </div>
          <div className={styles.part}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal