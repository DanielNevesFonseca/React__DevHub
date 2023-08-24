import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import styles from "./styles.module.scss";
import { Select } from "../Select";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { TextArea } from "../TextArea";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const [loadingRequest, setLoadingRequest] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const submit = (formData) => {
    userRegister(formData, setLoadingRequest);
  };

  return (
    <div className={styles.registerForm}>
      <form onSubmit={handleSubmit(submit)}>
        <h2 className="title2">Crie sua conta</h2>
        <span className="textHeadline">Rápido e grátis, vamos nessa!</span>
        <Input
          disabled={loadingRequest}
          type="text"
          placeholder="Digite seu nome..."
          label={"Nome"}
          autoComplete="off"
          {...register("name")}
          error={errors.name}
        />

        <Input
          disabled={loadingRequest}
          type="text"
          placeholder="Digite seu e-mail..."
          label={"E-mail"}
          autoComplete="off"
          {...register("email")}
          error={errors.email}
        />

        <InputPassword
          disabled={loadingRequest}
          placeholder="Digite sua senha..."
          label={"Senha"}
          autoComplete="off"
          {...register("password")}
          error={errors.password}
        />

        <InputPassword
          disabled={loadingRequest}
          placeholder="Confirme sua senha..."
          label={"Confirmar Senha"}
          autoComplete="off"
          {...register("confirm_password")}
          error={errors.confirm_password}
        />
        <TextArea
          disabled={loadingRequest}
          type="text"
          placeholder="Fale sobre você..."
          label={"Bio"}
          autoComplete="off"
          {...register("bio")}
          error={errors.bio}
        />

        <Input
          disabled={loadingRequest}
          type="number"
          placeholder="ddd+n° -- ex:21985477856 "
          label={"Contato"}
          autoComplete="off"
          {...register("contact")}
          error={errors.contact}
        />

        <Select
          disabled={loadingRequest}
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
          disabled={loadingRequest}
          className="buttonNegative"
          type="submit"
        >
          {loadingRequest ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};
