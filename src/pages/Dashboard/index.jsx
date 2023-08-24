import { useContext } from "react";
import { TemplatePage } from "../../components/TemplatePage";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext";
import { CreateTechModal } from "../../components/modals/CreateTechModal/CreateTechModal";
import { TechContext } from "../../providers/TechContext";
import { TechList } from "../../components/TechList/TechList";
import { EditTechModal } from "../../components/modals/EditTechModal/EditTechModal";
import { TbUserEdit } from "react-icons/tb";
import { MdPersonSearch } from "react-icons/md";
import { EditUserDataModal } from "../../components/modals/EditUserDataModal/EditUserDataModal";

export const Dashboard = () => {
  const { dataUser, editingDataUser, setEditingDataUser, redirectToUsers } =
    useContext(UserContext);
  const { createModalStatus, editModalStatus } = useContext(TechContext);

  return (
    <TemplatePage>
      <section className={styles.userDataSection}>
        <h1 className="title1">Olá, {dataUser?.name}!</h1>
        <div className={styles.userBox}>
          <p className="textHeadline">{dataUser?.course_module}</p>
          <button
            onClick={() => setEditingDataUser(dataUser)}
            title="Editar Usuário"
          >
            <TbUserEdit size={21} />
          </button>
        </div>
      </section>
      <TechList />
      <div className={styles.findUserBox}>
        <button onClick={() => redirectToUsers()} className="buttonDefault">
          Encontrar outros usuários <MdPersonSearch size={24} />
        </button>
      </div>
      {createModalStatus ? <CreateTechModal /> : null}
      {editModalStatus ? <EditTechModal /> : null}
      {editingDataUser ? <EditUserDataModal /> : null}
    </TemplatePage>
  );
};
