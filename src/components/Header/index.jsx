import styles from "./styles.module.scss";

export const Header = ({ logout }) => {
  return (
    <header className={styles.headerTemplate}>
      <h1 className="title1">Kenzie Hub</h1>
      <button onClick={() => logout()} className="buttonDisabled">
        Sair
      </button>
    </header>
  );
};
