import { BiError } from "react-icons/bi";
import styles from "./styles.module.scss";
import EaterAnimated from "../../assets/eater-animate.svg";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3 * 1000);

  return (
    <div className={styles.errorPage}>
      <div>
        <h1>Página não encontrada!</h1>
        <BiError size={50} />
      </div>
      <img src={EaterAnimated} alt="pacman animado." />
    </div>
  );
};
