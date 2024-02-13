import { useEffect, useState } from "react";
import axiosInstance from "../../../api/instance";
import Button from "../../../components/Button";
import Loader from "../../../components/Loader";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { RootState } from "../../../redux/store";
import { DASHBOARD_CREATE_COURSE_PAGE_ROUTE } from "../../../utils/consts";
import { Course, HeaderRoute } from "../../../utils/interfaces/general";
import CoursesGrid from "./components/CoursesGrid";
import CoursesHeader from "./components/Header";
import styles from "./CoursesPage.module.scss";

const CoursesPage: React.FC = () => {
  const [publicCourses, setPublicCourses] = useState<Course[]>([]);
  const [privateCourses, setPrivateCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useAppSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const publicCoursesResponse = await axiosInstance.get(
          "/courses/public"
        );
        const privateCoursesResponse = await axiosInstance.get(
          "/courses/private"
        );
        setPublicCourses(publicCoursesResponse.data);
        setPrivateCourses(privateCoursesResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const adminRoutes: HeaderRoute[] = [
    {
      name: "Ашық курстар",
      component: CoursesGrid,
      props: { courses: publicCourses },
    },
    {
      name: "Арнайы курстар",
      component: CoursesGrid,
      props: { courses: privateCourses },
    },
  ];

  return (
    <div className="home">
      <div className={styles.header}>
        <h1 className="section-title">Курстар</h1>
        {user?.type === "admin" && (
          <Button
            isLink={true}
            link={DASHBOARD_CREATE_COURSE_PAGE_ROUTE}
            text="Жаңа курс қосу"
            marginTop={0}
          />
        )}
      </div>
      {user?.type === "admin" && isLoading ? (
        <Loader isLarge={true} />
      ) : (
        <CoursesHeader routes={adminRoutes} />
      )}
    </div>
  );
};

export default CoursesPage;
