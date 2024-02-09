import { faTengeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Loader from "../../../components/Loader";
import { useCourseById } from "../../../hooks/useCourses";
import { LOGIN_PAGE_ROUTE } from "../../../utils/consts";
import styles from "./CoursePage.module.scss";

const CoursePage: React.FC = () => {
  const { id } = useParams();
  const { data: course, error, isLoading, isError } = useCourseById(+id!);

  return (
    <div className={classNames(styles.container, "container")}>
      {isLoading ? (
        <Loader isLarge={true} />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.part}>
            <h2 className="section-title">{course?.title}</h2>
            <h4 className={styles.title}>Курс туралы</h4>
            <p className="section-text">{course?.description}</p>
            <h4 className={styles.title}>Курсты аяқтағаннан кейін:</h4>
            <ul>
              {course?.benefits.split(";").map((benefit) => (
                <li className="section-text">- {benefit}</li>
              ))}
            </ul>
          </div>
          <div className={classNames(styles.block, styles.part)}>
            <img
              src={course?.imageUrl}
              alt={course?.title}
              className={styles.image}
            />
            <div className={styles.overlay}></div>
            <p className={styles.text}>Құны</p>
            <h4 className={styles.price}>
              {course?.price} <FontAwesomeIcon icon={faTengeSign} />
            </h4>
            <div className={styles.info}>
              <h6>8</h6>
              <p className={styles.text}>Модуль</p>
            </div>
            <div className={styles.info}>
              <h6>40</h6>
              <p className={styles.text}>Сабақ</p>
            </div>
            <div className={styles.info}>
              <h6>127</h6>
              <p className={styles.text}>Оқушы</p>
            </div>
            <Button
              isLink={true}
              link={LOGIN_PAGE_ROUTE}
              text="Курсты сатып алу"
              marginTop={24}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
