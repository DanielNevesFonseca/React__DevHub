import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { InputPassword } from "../InputPassword";
import { kenzieHubApi } from "../../../services/kenzieHubApi";
import { useState } from "react";

export const LoginForm = ({ setDataUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const submit = (formData) => {
    userLogin(formData);
  };

  const navigate = useNavigate();

  const redirectToRegisterPage = () => {
    setTimeout(() => {
      navigate("/register");
    }, 1 * 1000);
  };

  const userLogin = async (formData) => {
    try {
      setLoadingLoginRequest(true);
      const { data } = await kenzieHubApi.post("/sessions", formData);
      setDataUser(data.user);
      localStorage.setItem("@KenzieHub:userToken", JSON.stringify(data.token));
      toast.success("Login efetuado!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1.5 * 1000);
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Email e/ou senha incorretos!");
      }
    } finally {
      setLoadingLoginRequest(false);
    }
  };

  const [loadingLoginRequest, setLoadingLoginRequest] = useState(false);

  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit(submit)}>
        <h2 className="title2">Login</h2>
        <Input
          disabled={loadingLoginRequest}
          id={"inputEmail"}
          type="text"
          placeholder="Digite seu email..."
          label={"E-mail"}
          autoComplete="off"
          {...register("email")}
          error={errors.email}
        />
        <InputPassword
          disabled={loadingLoginRequest}
          id={"inputPassword"}
          placeholder="Digite sua senha..."
          label={"Senha"}
          autoComplete="off"
          {...register("password")}
          error={errors.password}
        />
        <button
          disabled={loadingLoginRequest}
          className="buttonDefault"
          type="submit"
        >
          {loadingLoginRequest ? "Fazendo login..." : "Login"}
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
