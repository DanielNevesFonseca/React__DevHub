import { MdAdd } from "react-icons/md";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard/TechCard.jsx";

export const TechList = () => {
  const { openModal, techList } = useContext(TechContext);

  return (
    <>
      {techList.length === 0 ? (
        <div className={styles.messageBox}>
          <h2 className="title2">Nenhuma tecnologia cadastrada...</h2>
          <p></p>
          <button title="Adicionar Tech" onClick={() => openModal("create")}>
            <MdAdd size={21} />
          </button>
        </div>
      ) : (
        <section className={styles.techSection}>
          <div className={styles.techHeader}>
            <h1 className="title1">Tecnologias</h1>
            <button title="Adicionar Tech" onClick={() => openModal("create")}>
              <MdAdd size={21} />
            </button>
          </div>
          <ul>
            {techList.map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
