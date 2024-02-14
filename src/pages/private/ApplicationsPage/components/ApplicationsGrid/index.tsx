import { Application } from "../../../../../utils/interfaces/general";
import ApplicationsItem from "../ApplicationsItem";
import styles from "./ApplicationsGrid.module.scss";

interface ApplicationsGridProps {
  applications: Application[];
}

const ApplicationsGrid: React.FC<ApplicationsGridProps> = ({
  applications,
}) => {
  return (
    <div className={styles.grid}>
      {applications.map((application) => (
        <ApplicationsItem application={application} key={application.id} />
      ))}
    </div>
  );
};

export default ApplicationsGrid;
