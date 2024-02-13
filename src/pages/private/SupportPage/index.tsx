import {
  faAt,
  faComment,
  faHashtag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../../../components/Loader";
import { useFeedback } from "../../../hooks/useFeedback";
import styles from "./SupportPage.module.scss";

const SupportPage: React.FC = () => {
  const { data, isLoading } = useFeedback();

  console.log(data);
  return (
    <div className="home">
      <h1 className="section-title">Сұрақтар</h1>
      <div className={isLoading ? "" : styles.grid}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.map((feedback) => (
            <div className={styles.item}>
              <div className={styles.number}>
                <FontAwesomeIcon icon={faHashtag} />
                {feedback.id}
              </div>
              <div>
                <div className={styles.block}>
                  <FontAwesomeIcon icon={faUser} />
                  <p>{feedback.fullName}</p>
                </div>
                <div className={styles.block}>
                  <FontAwesomeIcon icon={faAt} />
                  <p>{feedback.email}</p>
                </div>
                <div className={styles.block}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>{feedback.message}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SupportPage;
