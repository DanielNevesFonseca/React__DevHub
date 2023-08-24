import LoadingImg from "../../assets/loading-spin.svg";
import styles from "./styles.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <img src={LoadingImg} alt="Carregando" />
    </div>
  );
};
