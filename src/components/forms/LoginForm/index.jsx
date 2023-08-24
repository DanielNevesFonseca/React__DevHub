import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { InputPassword } from "../InputPassword";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const [loadingRequest, setLoadingRequest] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const submit = (formData) => {
    userLogin(formData, setLoadingRequest, reset);
  };

  const navigate = useNavigate();

  const redirectToRegisterPage = () => {
    setTimeout(() => {
      navigate("/register");
    }, 1 * 1000);
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit(submit)}>
        <h2 className="title2">Login</h2>
        <Input
          disabled={loadingRequest}
          id={"inputEmail"}
          type="text"
          placeholder="Digite seu email..."
          label={"E-mail"}
          autoComplete="off"
          {...register("email")}
          error={errors.email}
        />
        <InputPassword
          disabled={loadingRequest}
          id={"inputPassword"}
          placeholder="Digite sua senha..."
          label={"Senha"}
          autoComplete="off"
          {...register("password")}
          error={errors.password}
        />
        <button
          disabled={loadingRequest}
          className="buttonDefault"
          type="submit"
        >
          {loadingRequest ? "Fazendo login..." : "Login"}
        </button>
      </form>
      <div className={styles.registerBox}>
        <span className="textHeadline">Ainda não possui uma conta?</span>
        <button
          className="buttonDisabled"
          type="button"
          onClick={() => redirectToRegisterPage()}
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );
};
