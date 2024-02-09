import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faGraduationCap,
  faTengeSign,
  faStar,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { COURSES_PAGE_ROUTE } from "../../utils/consts";
import { Course } from "../../utils/interfaces/general";
import styles from "./CoursesItem.module.scss";

interface CoursesItemProps {
  course: Course;
}

const CoursesItem: React.FC<CoursesItemProps> = ({ course }) => {
  return (
    <div className={styles.course}>
      <div className={styles.rating}>
        <FontAwesomeIcon icon={faStar} />
        4.9
      </div>
      <div className={styles.image}>
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className={styles.body}>
        <h4 className={styles.title}>{course.title}</h4>
        <div className={styles["info-list"]}>
          <div className={styles["info-item"]}>
            <FontAwesomeIcon icon={faLeanpub} />
            <p>80 сабақ</p>
          </div>
          <div className={styles["info-item"]}>
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>120 адам</p>
          </div>
        </div>
        <div className={styles.footer}>
          <h6 className={styles.price}>
            {course.price} <FontAwesomeIcon icon={faTengeSign} />
          </h6>
          <Link
            to={COURSES_PAGE_ROUTE + "/" + course.id}
            className={styles.link}
          >
            <p>Толығырақ</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesItem;
