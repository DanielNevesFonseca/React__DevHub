import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { Select } from "../Select";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useNavigate } from "react-router-dom";
import { TextArea } from "../TextArea";
import { kenzieHubApi } from "../../../services/kenzieHubApi";
import { useState } from "react";

export const RegisterForm = () => {
  const [loadingRegisterRequest, setLoadingRegisterRequest] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const submit = (formData) => {
    userRegister(formData);
  };

  const userRegister = async (formData) => {
    try {
      setLoadingRegisterRequest(true);
      await kenzieHubApi.post("/users", formData);
      toast.success("Cadastro Efetuado! Voltando para login...");
      setTimeout(() => {
        navigate("/");
      }, 3 * 1000);
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("Email já cadastrado!");
      }
    } finally {
      setLoadingRegisterRequest(false);
    }
  };

  return (
    <div className={styles.registerForm}>
      <form onSubmit={handleSubmit(submit)}>
        <h2 className="title2">Crie sua conta</h2>
        <span className="textHeadline">Rápido e grátis, vamos nessa!</span>
        <Input
          disabled={loadingRegisterRequest}
          type="text"
          placeholder="Digite seu nome..."
          label={"Nome"}
          autoComplete="off"
          {...register("name")}
          error={errors.name}
        />

        <Input
          disabled={loadingRegisterRequest}
          type="text"
          placeholder="Digite seu e-mail..."
          label={"E-mail"}
          autoComplete="off"
          {...register("email")}
          error={errors.email}
        />

        <InputPassword
          disabled={loadingRegisterRequest}
          placeholder="Digite sua senha..."
          label={"Senha"}
          autoComplete="off"
          {...register("password")}
          error={errors.password}
        />

        <InputPassword
          disabled={loadingRegisterRequest}
          placeholder="Confirme sua senha..."
          label={"Confirmar Senha"}
          autoComplete="off"
          {...register("confirm_password")}
          error={errors.confirm_password}
        />
        <TextArea
          disabled={loadingRegisterRequest}
          type="text"
          placeholder="Fale sobre você..."
          label={"Bio"}
          autoComplete="off"
          {...register("bio")}
          error={errors.bio}
        />

        <Input
          disabled={loadingRegisterRequest}
          type="number"
          placeholder="ddd+n° -- ex:21985477856 "
          label={"Contato"}
          autoComplete="off"
          {...register("contact")}
          error={errors.contact}
        />

        <Select
          disabled={loadingRegisterRequest}
          {...register("course_module")}
          label={"Selecionar Módulo"}
          error={errors.contact}
        >
          <>
            <option value="M1 - Front-End Básico">Primeiro Módulo - M1</option>
            <option value="M2 - Front-End Intermediário">
              Segundo Módulo - M2
            </option>
            <option value="M3 - Front-End Avançado">
              Terceiro Módulo - M3
            </option>
            <option defaultValue={true} value="M4 - Back-End Básico">
              Quarto Módulo - M4
            </option>
            <option value="M5 - Back-End Intermediário">
              Quinto Módulo - M5
            </option>
            <option value="M6 - Back-End Avançado">Sexto Módulo - M6</option>
          </>
        </Select>

        <button
          disabled={loadingRegisterRequest}
          className="buttonNegative"
          type="submit"
        >
          {loadingRegisterRequest ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};
