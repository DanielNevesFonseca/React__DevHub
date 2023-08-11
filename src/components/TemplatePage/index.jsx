import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./styles.module.scss";

export const TemplatePage = ({ children, logout }) => {
  return (
    <div className={styles.templatePage}>
      <Header logout={logout} />
      {children}
      <Footer />
    </div>
  );
};
