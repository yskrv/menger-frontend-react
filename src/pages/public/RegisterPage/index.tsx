import { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import classNames from "classnames";
import { faAt, faLock, faUnlock, faUser } from "@fortawesome/free-solid-svg-icons";
import { activate, register } from "../../../api/auth";
import AuthLinks from "../LoginPage/components/AuthLinks";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Loader from "../../../components/Loader";
import { User } from "../../../utils/interfaces/userInterfaces";
import { getMe } from "../../../api/user";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setActiveUser } from "../../../redux/slices/user.slice";
import styles from "./RegisterPage.module.scss";

const RegisterPage: React.FC = () => {
	const dispatch = useAppDispatch();

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [activationCode, setActivationCode] = useState<string>("");
	const [codeIsLoading, setCodeIsLoading] = useState<boolean>(false);
	const [codePageIsOpen, setCodePageIsOpen] = useState<boolean>(false);

	const { mutate, isLoading, isError } = useMutation(register, {
		onSuccess: (data) => {
			localStorage.setItem('token', data.token);
			setCodePageIsOpen(true);
		},
		onError: (err) => {
			console.error(err);
		}
	});

	const handleSubmitRegisterUser = (event: FormEvent) => {
		event.preventDefault();
		mutate({ firstName, lastName, email, password, type: "student" });
	}

	const handleSubmitActivateUser = async (event: FormEvent) => {
		event.preventDefault();
		setCodeIsLoading(true);
		activate(activationCode);
		const user: User = await getMe();
		dispatch(setActiveUser({ token: localStorage.getItem('token'), user }));
		setCodeIsLoading(false);
	}

	return (
		<div className={styles.container}>
			<div className={classNames(styles.wrapper, "container")}>
				<div className={styles["wrapper-part"]}>
					<div className={styles.circle}></div>
					<div className={styles.circle}></div>
					<div className={styles.circle}></div>
				</div>
				<div className={styles["wrapper-part"]}>
					<div className={styles["wrapper-header"]}>
						<h2 className={styles.title}>Тіркелу</h2>
						<AuthLinks/>
					</div>
					{
						codePageIsOpen ? (
							<form className={styles.form} onSubmit={handleSubmitActivateUser}>
								<p>{email} электрондық поштасына растау коды бар хат жіберілді. Аккаунтты растау үшін жіберілген коды енгізіңіз:</p>
								<Input
									title="Растау коды"
									placeholder="Растау кодын енгізіңіз"
									icon={faUnlock}
									value={activationCode}
									setValue={setActivationCode}
								/>
								<div className={styles["wrapper-bottom"]}>
									<div className={styles.loading}>
										<Button text="Растау" marginTop={0} type="submit" isLoading={codeIsLoading}/>
										{ codeIsLoading && <Loader/> }
									</div>
								</div>
								{ isError && <p className={styles.error}>Кіру кезінде қате пайда болды: электрондық пошта мекенжайы немесе құпия сөз дұрыс емес</p> }
							</form>
						) : (
							<form className={styles.form} onSubmit={handleSubmitRegisterUser}>
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
								<Input
									title="Құпия сөз"
									placeholder="Құпия сөзді енгізіңіз"
									icon={faLock}
									type="password"
									value={password}
									setValue={setPassword}
								/>
								<div className={styles["wrapper-bottom"]}>
									<div className={styles.loading}>
										<Button text="Кіру" marginTop={0} type="submit" isLoading={isLoading}/>
										{ isLoading && <Loader/> }
									</div>
								</div>
								{ isError && <p className={styles.error}>Кіру кезінде қате пайда болды: электрондық пошта мекенжайы немесе құпия сөз дұрыс емес</p> }
							</form>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default RegisterPage;