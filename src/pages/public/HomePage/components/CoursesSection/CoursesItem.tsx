import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGraduationCap, faTengeSign, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Course } from "../../../../../utils/interfaces";
import styles from "./CoursesSection.module.scss";

interface CoursesItemProps {
  course: Course;
}

const CoursesItem: React.FC<CoursesItemProps> = ({ course }) => {
  console.log(course.imageUrl);
  return (
    <div className={styles.course}>
      <div className={styles["course-rating"]}>
        <FontAwesomeIcon icon={faStar}/>
        4.9
      </div>
      <div className={styles["course-img"]}>
        <img src={course.imageUrl} alt={course.title}/>
      </div>
      <div className={styles["course-body"]}>
        <h4 className={styles["course-title"]}>{course.title}</h4>
        <div className={styles["course-info-list"]}>
          <div className={styles["course-info-item"]}>
            <FontAwesomeIcon icon={faLeanpub}/>
            <p>80 сабақ</p>
          </div>
          <div className={styles["course-info-item"]}>
            <FontAwesomeIcon icon={faGraduationCap}/>
            <p>120 адам</p>
          </div>
        </div>
        <div className={styles["course-footer"]}>
          <h6 className={styles["course-price"]}>{course.price} <FontAwesomeIcon icon={faTengeSign}/></h6>
          <FontAwesomeIcon icon={faHeart} className={styles["course-heart"]}/>
        </div>
      </div>
    </div>
  );
}

export default CoursesItem;