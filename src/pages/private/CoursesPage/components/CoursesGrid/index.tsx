import CoursesItem from "../../../../../components/CoursesItem";
import { Course } from "../../../../../utils/interfaces/general";
import styles from "./CoursesGrid.module.scss";

interface CoursesGridProps {
  courses: Course[];
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses }) => {
  console.log(courses);
  return (
    <div className={styles.grid}>
      {courses && courses.map((course) => <CoursesItem course={course} />)}
    </div>
  );
};

export default CoursesGrid;
