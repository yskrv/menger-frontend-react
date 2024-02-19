import { Link } from "react-router-dom";
import {
  COURSES_PAGE_ROUTE,
  FAQ_PAGE_ROUTE,
  SUPPORT_PAGE_ROUTE,
} from "../../utils/consts";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.logo}>Xplore</div>
            <p className={styles.text}>
              Халықаралық жетістік тілін
              <br />
              үйрену - кең әлемге бір қадам!
            </p>
          </div>
          <div>
            <p className={styles.title}>Қызметтер:</p>
            <Link to={COURSES_PAGE_ROUTE} className={styles.link}>
              Курстар
            </Link>
            <Link to={FAQ_PAGE_ROUTE} className={styles.link}>
              Сұрақ & Жауап
            </Link>
            <Link to={SUPPORT_PAGE_ROUTE} className={styles.link}>
              Қолдау Қызметі
            </Link>
          </div>
          <div>
            <p className={styles.title}>Байланыс ақпараты</p>
            <Link to="/" className={styles.link}>
              +7 (777) 777 77 77
            </Link>
            <Link to="/" className={styles.link}>
              support@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles["bottom-container"]}>
          <p className={styles["bottom-text"]}>2024 &copy; Xplore</p>
          <p className={styles["bottom-text"]}>Барлық құқықтар қорғалған</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
