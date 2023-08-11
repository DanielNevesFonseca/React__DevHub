import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";

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
        <h2 className="title1">Kenzie Hub</h2>
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
