import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import classNames from "classnames";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { login } from "../../../api/auth";
import { FORGET_PASSWORD_PAGE_ROUTE } from "../../../utils/consts";
import Input from "../../../components/Input";
import AuthLinks from "./components/AuthLinks";
import Button from "../../../components/Button";
import Loader from "../../../components/Loader";
import styles from "./LoginPage.module.scss";

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { mutate, isLoading, isError } = useMutation(login, {
		onSuccess: (data) => {
			localStorage.setItem('token', data.token);
			console.log(data.token);
		},
		onError: (err) => {
			console.error(err);
		}
	});

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		mutate({ email, password });
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
						<h2 className={styles.title}>Кіру</h2>
						<AuthLinks/>
					</div>
					<form className={styles.form} onSubmit={handleSubmit}>
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
							<Link to={FORGET_PASSWORD_PAGE_ROUTE} className={styles.link}>Құпия сөзді ұмыттыңыз ба?</Link>
						</div>
						{ isError && <p className={styles.error}>Кіру кезінде қате пайда болды: электрондық пошта мекенжайы немесе құпия сөз дұрыс емес</p> }
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginPage;