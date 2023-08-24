import { MdClose } from "react-icons/md";
import { Input } from "../../forms/Input/Input";
import { Select } from "../../forms/Select";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechModalSchema } from "./CreateTechModalSchema";

export const CreateTechModal = () => {
  const { createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTechModalSchema),
  });

  const submit = (formData) => {
    createTech(formData);
    closeModal("create");
  };

  const { closeModal } = useContext(TechContext);

  return (
    <div className={styles.modalController} role="dialog">
      <div className={styles.modalContainer}>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles.headerBox}>
            <h2 className="title2">Cadastrar Tecnologia</h2>
            <button
              onClick={() => closeModal("create")}
              type="button"
              title="Fechar modal"
              className="buttonDisabled"
            >
              <MdClose size={16} />
            </button>
          </div>
          <div className={styles.inputsBox}>
            <Input
              {...register("title")}
              id="title"
              placeholder="Digite o nome da Tecnologia"
              autoComplete="off"
              type="text"
              label="Nome"
              error={errors.title}
            />
            <Select
              error={errors.status}
              {...register("status")}
              label="Selecionar nível"
            >
              <option defaultValue={true} value="">
                Selecione...
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <button className="buttonDefault" type="submit">
              Cadastrar Tecnologia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
