import { TemplatePage } from "../../components/TemplatePage";
import styles from "./styles.module.scss";
import { RiEmotionSadFill } from "react-icons/ri";

export const Dashboard = ({ dataUser, logout }) => {
  return (
    <TemplatePage logout={logout}>
      <section className={styles.userDataSection}>
        <h1 className="title1">Olá, {dataUser?.name}!</h1>
        <p className="textHeadline">{dataUser?.course_module}</p>
      </section>
      <section className={styles.workingMessageSection}>
        <h1 className="title1">
          Que pena! Estamos em desenvolvimento... <RiEmotionSadFill size={21} />
        </h1>
        <p className="textBody">
          Nossa aplicação está em desenvolvimento. Em breve teremos novidades!
        </p>
      </section>
    </TemplatePage>
  );
};
