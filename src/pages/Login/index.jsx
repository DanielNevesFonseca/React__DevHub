import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./styles.module.scss";

export const Login = () => {
  return (
    <section className={styles.loginSection}>
      <h1 className="title1">Dev Hub</h1>
      <LoginForm />
    </section>
  );
};
