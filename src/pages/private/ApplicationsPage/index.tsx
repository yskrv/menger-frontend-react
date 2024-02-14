import { useEffect, useState } from "react";
import axiosInstance from "../../../api/instance";
import Loader from "../../../components/Loader";
import { Application, HeaderRoute } from "../../../utils/interfaces/general";
import styles from "./ApplicationsPage.module.scss";
import ApplicationsGrid from "./components/ApplicationsGrid";
import ApplicationsItem from "./components/ApplicationsItem";
import ApplicationsHeader from "./components/Header";

const ApplicationsPage: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const routes: HeaderRoute[] = [
    {
      name: "Қабылданбаған өтініштер",
      component: ApplicationsGrid,
      props: { applications: applications.filter((item) => !item.isAccepted) },
    },
    {
      name: "Қабылданған өтініштер",
      component: ApplicationsGrid,
      props: { applications: applications.filter((item) => item.isAccepted) },
    },
  ];

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("/applications", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        setApplications(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="home">
      <h1 className="section-title">Өтініштер</h1>
      {isLoading ? (
        <Loader isLarge={true} />
      ) : (
        <ApplicationsHeader routes={routes} />
      )}
    </div>
  );
};

export default ApplicationsPage;
