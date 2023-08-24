import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./styles.module.scss";

export const TemplatePage = ({ children }) => {
  return (
    <div className={styles.templatePage}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
