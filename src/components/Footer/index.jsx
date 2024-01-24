import styles from "./styles.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footerTemplate}>
      <p className="textHeadline">
        &copy; Todos os direitos reservados - {currentYear}
      </p>
      <span className="textHeadline hidden">
        Desenvolvido por <i>Daniel Neves Fonseca</i>
      </span>
      <h2 className="title2">Dev Hub</h2>
    </footer>
  );
};
