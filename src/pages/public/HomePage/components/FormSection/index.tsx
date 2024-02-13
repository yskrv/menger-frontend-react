import { useState } from "react";
import {
  faAt,
  faBuilding,
  faComment,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../../../../api/instance";
import { Application } from "../../../../../utils/interfaces/general";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import formImage from "../../../../../assets/img/form_image.png";
import styles from "./FormSection.module.scss";

type CreateApplicationDto = Omit<Application, "id" | "createdAt">;

const FormSection: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string>("");

  const sendApplication = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const data: CreateApplicationDto = {
      fullName,
      organization,
      email,
      phoneNumber,
      text,
      isAccepted: false,
    };

    try {
      setError("Жүктелуде...");
      const res = await axiosInstance.post("/applications", data);
      console.log(res);
      setError("Сіздің өтінішіңіз сәтті жеткізілді!");
    } catch (e) {
      console.log(e);
      setError("Жүктелу кезінде қате пайда болды");
    }
  };

  return (
    <section id="form" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src={formImage} alt="Form" />
        </div>
        <div className={styles.info}>
          <h2 className="section-title">Өтініш қалдыру</h2>
          <p className="section-text">
            Кәсіби ағылшын тілінің ғажайып әлеміне енгініз келсе, өтініш дәл
            қазір қалдырыңыз, біз жақын арада сізбен байланысамыз. Сіздің кәсіби
            болашағыңыз осы жерден басталады!
          </p>
          <div className={styles.form}>
            <Input
              title="Аты - жөні"
              placeholder="Аты - жөніңізді енгізіңіз"
              value={fullName}
              setValue={setFullName}
              icon={faUser}
            />
            <Input
              title="Ұйымның Аты"
              placeholder="Ұйымның атын енгізіңіз"
              value={organization}
              setValue={setOrganization}
              icon={faBuilding}
            />
            <Input
              title="E-mail"
              placeholder="Е-mail мекенжайын енгізіңіз "
              value={email}
              setValue={setEmail}
              icon={faAt}
            />
            <Input
              title="Телефон номері"
              placeholder="Телефон номерін енгізіңіз"
              value={phoneNumber}
              setValue={setPhoneNumber}
              icon={faPhone}
            />
          </div>
          <Input
            isTextarea={true}
            title="Сіздің өтінішіңіз"
            placeholder="Өтінішіңізді енгізіңіз"
            value={text}
            setValue={setText}
            icon={faComment}
          />
          <Button
            isLink={false}
            func={sendApplication}
            text={"Өтініш жіберу"}
            marginTop={24}
          />
          <p style={{ marginTop: "12px" }}>{error}</p>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
