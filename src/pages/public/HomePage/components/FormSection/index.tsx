import styles from "./FormSection.module.scss";
import formImage from "../../../../../assets/img/form_image.png";
import Input from "../../../../../components/Input";
import { useState } from "react";
import { faAt, faBuilding, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../../components/Button";
import { Application } from "../../../../../utils/interfaces";
import axiosInstance from "../../../../../services/axios";

const FormSection: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendApplication = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const data: Application = {
      fullName,
      organization,
      email,
      phone,
      date: "2024-02-25T09:00:00.000Z"
    };

    try {
      setMessage("Жүктелуде...");
      const res = await axiosInstance.post('/applications', data);
      console.log(res);
      setMessage("Сіздің өтінішіңіз сәтті жеткізілді!");
    } catch (e) {
      console.log(e);
      setMessage("Жүктелу кезінде қате пайда болды");
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.img}>
        <img src={formImage} alt="Form"/>
      </div>
      <div className={styles.info}>
        <h2 className="section-title">Өтініш қалдыру</h2>
        <p className="section-text">Кәсіби ағылшын тілінің ғажайып әлеміне енгініз келсе, өтініш дәл қазір қалдырыңыз, біз жақын арада сізбен байланысамыз.  Сіздің кәсіби болашағыңыз осы жерден басталады!</p>
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
            placeholder="Ұйымның атын енгізіңіз" 
            value={phone}
            setValue={setPhone}
            icon={faPhone}
          />
        </div>
        <Button
          isLink={false}
          func={sendApplication}
          text={"Өтініш жіберу"}
          marginTop={0}
        />
        <p style={{marginTop: '12px'}}>{message}</p>
      </div>
    </section>
  );
}

export default FormSection;