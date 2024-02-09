import CoursesItem from "../../../components/CoursesItem";
import Loader from "../../../components/Loader";
import { useCourses } from "../../../hooks/useCourses";
import styles from "./CoursesPage.module.scss";

const CoursesPage: React.FC = () => {
  const { data: courses, error, isLoading, isError } = useCourses();

  return (
    <div className="container">
      <div className={styles.courses}>
        <h2 className="section-title">Курстар</h2>
        <div className={styles.wrapper}>
          <div className={isLoading ? "" : styles.grid}>
            {isLoading ? (
              <Loader isLarge={true} />
            ) : (
              courses?.map((course) => <CoursesItem course={course} />)
            )}
          </div>
          <div>
            <h4 className={styles.title}>Курстың бағасы</h4>
            <div>
              <div className={styles.checkbox}>
                <input type="checkbox" />
                <p>0 - 50.000</p>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" />
                <p>50.000 - 100.000</p>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" />
                <p>100.000 - 150.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
