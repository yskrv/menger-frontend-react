import {
  faFont,
  faListCheck,
  faMessage,
  faTengeSign,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/instance";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";
import { DASHBOARD_COURSES_PAGE_ROUTE } from "../../../utils/consts";
import styles from "./CreateCoursePage.module.scss";

const CreateCoursePage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [benefits, setBenefits] = useState<string>("");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const result = loadEvent.target?.result;
        setImageURL(typeof result === "string" ? result : null);
      };
      reader.readAsDataURL(file);
    }
  };

  const createCourse = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", parseFloat(price).toString());
      formData.append("benefits", benefits);
      formData.append("isPublic", "true");
      formData.append("file", file);

      try {
        setIsLoading(true);
        const response = await axiosInstance.post("/courses", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        });
        console.log(response);
        setMessage("Курс сәтті қосылды");
        setTimeout(() => navigate(DASHBOARD_COURSES_PAGE_ROUTE), 1000);
      } catch (error) {
        console.log(error);
        setMessage("Курс қосылу кезінде қате пайда болды");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="home">
      <h1 className="section-title">Жаңа курс қосу</h1>
      <div className={styles.container}>
        <div className={styles.form}>
          <Input
            title="Курстың аты"
            placeholder="Курстың атын енгізіңіз"
            icon={faFont}
            value={title}
            setValue={setTitle}
          />

          <Input
            isTextarea={true}
            title="Курстың сипаттамасы"
            placeholder="Курстың сипаттамасын енгізіңіз"
            icon={faMessage}
            value={description}
            setValue={setDescription}
          />

          <Input
            title="Курстың бағасы"
            placeholder="Курстың бағасын енгізіңіз"
            type="number"
            icon={faTengeSign}
            value={price}
            setValue={setPrice}
          />
          <Input
            title="Курстың артықшылықтары"
            placeholder="Курстың артықшылықтарыын енгізіңіз"
            icon={faListCheck}
            value={benefits}
            setValue={setBenefits}
          />

          <div className={styles.btn}>
            <Button
              func={createCourse}
              isLoading={isLoading}
              text="Курсты қосу"
              marginTop={0}
            />
            {isLoading && <Loader />}
          </div>

          <p className={styles.message}>{message}</p>
        </div>
        <div>
          <h2 className={styles.title}>Курстың суреті</h2>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            accept="image/**"
            onChange={handleImageChange}
          />
          <label htmlFor="file" className={styles.upload}>
            <FontAwesomeIcon icon={faUpload} />
            <h6>Суретті жүктеңіз</h6>
          </label>

          {imageURL && (
            <img src={imageURL} alt="Uploaded" className={styles.preview} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePage;
