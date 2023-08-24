import { MdEdit, MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { deleteTech, openModal, setEditingTech } = useContext(TechContext);
  return (
    <li className={styles.techItem}>
      <p className="textParagraph bold">{tech.title}</p>
      <div>
        <p className="textHeadline">{tech.status}</p>
        <div>
          <button
            className={styles.editButton}
            onClick={() => {
              openModal("edit");
              setEditingTech(tech);
            }}
          >
            <MdEdit title="Editar Tech" size={16} />
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => deleteTech(tech.id)}
          >
            <MdDelete title="Deletar Tech" size={16} />
          </button>
        </div>
      </div>
    </li>
  );
};
