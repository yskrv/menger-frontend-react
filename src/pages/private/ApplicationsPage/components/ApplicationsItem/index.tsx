import {
  faAt,
  faBuilding,
  faCheck,
  faComment,
  faHashtag,
  faPhone,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axiosInstance from "../../../../../api/instance";
import Loader from "../../../../../components/Loader";
import { Application } from "../../../../../utils/interfaces/general";
import { User } from "../../../../../utils/interfaces/userInterfaces";
import { generatePassword } from "../../../../../utils/utils";
import styles from "./ApplicationsItem.module.scss";

interface ApplicationsItemProps {
  application: Application;
}

type CreateUserWithOrganizationDto = Omit<
  User,
  "id" | "points" | "createdAt" | "organization" | "imageUrl"
>;

const ApplicationsItem: React.FC<ApplicationsItemProps> = ({ application }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasDeleted, setHasDeleted] = useState<boolean>(false);

  const deleteApplication = async () => {
    try {
      setIsLoading(true);
      await axiosInstance.delete("/applications/" + application.id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setHasDeleted(true);
    } catch (error) {
      alert("Өтінішті жою кезінде қате шықты");
    } finally {
      setIsLoading(false);
    }
  };

  const acceptApplication = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.post(
        "/organizations",
        {
          name: application.organization,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const createUserData: CreateUserWithOrganizationDto = {
        firstName: application.fullName.split(" ")[1],
        lastName: application.fullName.split(" ")[0],
        email: application.email,
        password: generatePassword(),
        type: "manager",
        organizationId: data.id,
        isActivated: true,
      };

      await axiosInstance.post("/users/organization", createUserData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      await axiosInstance.patch(
        "/applications",
        {
          id: application.id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      alert("Өтінішті растау кезінде қате шықты");
    } finally {
      setIsLoading(false);
    }
  };

  return !hasDeleted ? (
    <div className={styles.item}>
      {isLoading && (
        <div className={styles.loading}>
          <Loader />
        </div>
      )}
      <div className={styles.header}>
        <div className={styles.number}>
          <FontAwesomeIcon icon={faHashtag} />
          {application.id}
        </div>
        <div className={styles.buttons}>
          <button className={styles.accept} onClick={acceptApplication}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className={styles.delete} onClick={deleteApplication}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <div>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faUser} />
          <p>{application.fullName}</p>
        </div>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faBuilding} />
          <p>{application.organization}</p>
        </div>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faAt} />
          <p>{application.email}</p>
        </div>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faPhone} />
          <p>{application.phoneNumber}</p>
        </div>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faComment} />
          <p>{application.text}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default ApplicationsItem;
