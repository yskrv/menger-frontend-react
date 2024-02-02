import { faTengeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PricingSection.module.scss";

interface PricingItemProps {
  name: string;
  price: string;
  color: string;
  bgColor: string;
}

const PricingItem: React.FC<PricingItemProps> = ({  name, price, color, bgColor}) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <h6 className={styles.title}>{name}</h6>
      </div>
      <div className={styles.price} style={{background: bgColor, color: color}}>
        {price}
        <FontAwesomeIcon icon={faTengeSign}/>
        / айына
      </div>
      <div className={styles.body}>
        <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div>
          <div className={styles.info}>Lorem Ipsum is simply dummy text</div>
          <div className={styles.info}>Lorem Ipsum is simply dummy text</div>
          <div className={styles.info}>Lorem Ipsum is simply dummy text</div>
          <div className={styles.info}>Lorem Ipsum is simply dummy text</div>
        </div>
      </div>
    </div>
  );
}

export default PricingItem;