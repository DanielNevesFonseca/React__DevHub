import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm";
import styles from "./styles.module.scss";

export const Register = () => {
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    setTimeout(() => {
      navigate("/");
    }, 1 * 1000);
  };

  return (
    <section className={styles.registerSection}>
      <div className={styles.titleBox}>
        <h2 className="title1">Dev Hub</h2>
        <button
          onClick={() => redirectToLoginPage()}
          className="buttonDisabled"
        >
          Voltar
        </button>
      </div>
      <RegisterForm />
    </section>
  );
};
