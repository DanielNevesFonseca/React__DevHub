import { MdClose } from "react-icons/md";
import { Input } from "../../forms/Input/Input";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers/UserContext";
import { EditUserDataModalSchema } from "./EditUserDataModalSchema";
import { InputPassword } from "../../forms/InputPassword";
export const EditUserDataModal = () => {
  const { dataUser, editingDataUser, setEditingDataUser, updateUser } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: editingDataUser?.name,
      contact: editingDataUser?.contact,
    },
    resolver: zodResolver(EditUserDataModalSchema),
  });
  const submit = (formData) => {
    updateUser(formData);
    setEditingDataUser(null);
  };

  return (
    <div className={styles.modalController} role="dialog">
      <div className={styles.modalContainer}>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles.headerBox}>
            <h2 className="title2">
              Editar Dados de <span>{dataUser.name}</span>
            </h2>
            <button
              onClick={() => setEditingDataUser(null)}
              type="button"
              title="Fechar modal"
              className="buttonDisabled"
            >
              <MdClose size={16} />
            </button>
          </div>
          <div className={styles.inputsBox}>
            <Input
              {...register("name")}
              id="name"
              placeholder="Digite seu nome"
              autoComplete="off"
              type="text"
              label="Nome"
              disabled={true}
              error={errors.name}
            />

            <Input
              type="number"
              placeholder="(DDD) 91234-5678"
              label={"Contato"}
              autoComplete="off"
              {...register("contact")}
              error={errors.contact}
            />
            <InputPassword
              placeholder="Digite sua senha antiga"
              label={"Senha Antiga"}
              autoComplete="off"
              {...register("old_password")}
              error={errors.old_password}
            />
            <InputPassword
              placeholder="Digite sua senha antiga"
              label={"Nova Senha"}
              autoComplete="off"
              {...register("password")}
              error={errors.password}
            />
            <button className="buttonNegative" type="submit">
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
