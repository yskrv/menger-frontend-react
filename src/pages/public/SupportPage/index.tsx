import { faAt, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { addFeedback } from "../../../api/feedback";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";
import Modal from "../../../components/Modal";
import supportImage from "../../../assets/img/support_image.png";
import modalSupportImage from "../../../assets/img/modal_support_image.png";
import styles from "./SupportPage.module.scss";
import { Feedback } from "../../../utils/interfaces/feedbackInterfaces";


const SupportPage: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const { mutate, isLoading, isError } = useMutation(addFeedback, {
    onSuccess: (data) => {
      setIsOpen(true);
      setFeedback(data);
      setFullName("");
      setEmail("");
      setMessage("");
    },
    onError: (err) => {
      console.log(err);
    }
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutate({ fullName, email, message });
  }

  return (
    <>
      {
        isOpen && <Modal
          imageUrl={modalSupportImage}
          title="Сіздің сұрағыңыз сәтті жеткізілді"
          text={`Біздің қолдау қызметіне сұрақ жазғаныңызға рахмет! Сіздің сұрағыңыз #${feedback?.id} нөмерімен тіркелген. Біздің маманымыз сізбен жақын арада хабарласады.`}
          setIsOpen={setIsOpen}
        />
      }
      <div className="container">
        <div className={styles.support}>
          <div className={styles.part}>
            <h2 className="section-title"><span>Men'ger</span> Қолдау Қызметі</h2>
            <p className="section-text">Біз сізге қызметтерімізді пайдалану кезінде кез келген сұрақтарыңызға немесе мәселелеріңізге көмектесуге әрқашан дайынбыз.</p>
            <h3 className={styles.title}>Қолдау қызметіне жазу</h3>
            <p className="section-text">Өтініш қалдырыңыз, және біз сізге көмектесуге тырысамыз:</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.grid}>
                <Input
                  title="Аты-жөні"
                  placeholder="Аты-жөніңізді енгізіңіз"
                  icon={faUser}
                  value={fullName}
                  setValue={setFullName}
                />
                <Input
                  title="E-mail"
                  placeholder="Е-mail мекенжайын енгізіңіз"
                  icon={faAt}
                  type="email"
                  value={email}
                  setValue={setEmail}
                />
              </div>
              <Input
                isTextarea={true}
                title="Сіздің сұрағыныз"
                placeholder="Туындаған сұрақты туралы айтып беріңіз"
                icon={faComment}
                value={message}
                setValue={setMessage}
              />
              <div className={styles.flex}>
                <Button
                  text="Хабарлама жіберу"
                  type="submit"
                  marginTop={0}
                  isLoading={isLoading}
                />
                { isLoading && <Loader/> }
              </div>
              { isError && <p className={styles.error}>Хабарлама жіберу кезінде қате пайда болды</p> }
            </form>
          </div>
          <div className={styles.part}>
            <img src={supportImage} className={styles.image} alt="Support" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportPage;