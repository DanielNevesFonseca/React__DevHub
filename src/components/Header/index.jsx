import { useContext } from "react";
import styles from "./styles.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const {logout} = useContext(UserContext);
  return (
    <header className={styles.headerTemplate}>
      <h1 className="title1">Kenzie Hub</h1>
      <button onClick={() => logout()} className="buttonDisabled">
        Sair
      </button>
    </header>
  );
};
