import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../api/instance";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";
import { User } from "../../../utils/interfaces/userInterfaces";
import { generatePassword } from "../../../utils/utils";
import styles from "./UsersPage.module.scss";

type CreateUserWithOrganizationDto = Omit<
  User,
  "id" | "createdAt" | "points" | "imageUrl" | "organization"
>;

const UsersPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const organizationId = parseInt(id!, 10);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(
        "/users/organization/" + organizationId,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [isUpdated]);

  const addUser = async () => {
    try {
      setFormIsLoading(true);
      const createUserData: CreateUserWithOrganizationDto = {
        firstName,
        lastName,
        email,
        password: generatePassword(),
        type: "student",
        isActivated: true,
        organizationId,
      };

      await axiosInstance.post("/users/organization", createUserData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setIsUpdated(!isUpdated);
    } catch (error) {
      console.log(error);
    } finally {
      setFormIsLoading(false);
    }
  };

  console.log(users);

  return (
    <div className="home">
      <h1 className="section-title">Ұйым ішіндегі пайдаланушылар</h1>
      <div className={styles.container}>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className={styles.list}>
              {users
                .filter(
                  (user) =>
                    user.organizationId === organizationId &&
                    user.type === "student"
                )
                .map((user, index) => (
                  <div className={styles.item}>
                    <div className={styles.number}>{index + 1}</div>
                    <div className={styles.name}>
                      {user.firstName} {user.lastName}
                    </div>
                    <div className={styles.name}>{user.email}</div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className={styles.form}>
          <Input
            title="Есімі"
            placeholder="Есімінізді енгізіңіз"
            icon={faUser}
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            title="Тегі"
            placeholder="Тегіңізді енгізіңіз"
            icon={faUser}
            value={lastName}
            setValue={setLastName}
          />
          <Input
            title="E-mail"
            placeholder="Электрондық поштанызды енгізіңіз"
            icon={faAt}
            type="email"
            value={email}
            setValue={setEmail}
          />
          <div className={styles.flex}>
            <Button
              text="Пайдаланушыды қосу"
              marginTop={0}
              func={addUser}
              isLoading={formIsLoading}
            />
            {formIsLoading && <Loader />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
