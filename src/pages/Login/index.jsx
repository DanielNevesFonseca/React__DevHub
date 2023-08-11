import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./styles.module.scss";
export const Login = ({ setDataUser }) => {
  return (
    <section className={styles.loginSection}>
      <h1 className="title1">Kenzie Hub</h1>
      <LoginForm setDataUser={setDataUser} />
    </section>
  );
};
