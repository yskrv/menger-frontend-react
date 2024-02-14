import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../../components/Loader";
import axiosInstance from "../../../../../api/instance";
import { COURSES_PAGE_ROUTE } from "../../../../../utils/consts";
import { Course } from "../../../../../utils/interfaces/general";
import CoursesItem from "../../../../../components/CoursesItem";
import styles from "./CoursesSection.module.scss";

const CoursesSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axiosInstance
      .get("/courses/popular")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section>
      <div className={styles.header}>
        <h2 className={classNames("section-title", styles.title)}>
          Ағылшын тілін үйренуге арналған курстар тізімі
        </h2>
        <Link className={styles.link} to={COURSES_PAGE_ROUTE}>
          Курстар тізімі <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
      {isLoading ? (
        <Loader isLarge={true} />
      ) : (
        <div className={styles.list}>
          {courses.map((course) => (
            <CoursesItem course={course} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
