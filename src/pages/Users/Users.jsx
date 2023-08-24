import { TemplatePage } from "../../components/TemplatePage";
import { UsersList } from "../../components/UsersList/UsersList";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { UsersContext } from "../../providers/UsersContext";
import { Loading } from "../../components/Loading/Loading";

export const Users = () => {
  const { page, minusOnePage, plusOnePage, loadingPage, redirectToDashboard } =
    useContext(UsersContext);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <TemplatePage>
          <section id="headerSection" className={styles.headerSection}>
            <h1 className="title1">Lista de usuários cadastrados</h1>
            <button
              onClick={() => redirectToDashboard()}
              title="Voltar para Dashboard"
            >
              <BiUserCircle size={30} />
            </button>
          </section>
          <div className={styles.pageLocationBox}>
            {page == 1 ? null : (
              <button title=" Página Anterior" onClick={() => minusOnePage()}>
                <GrFormPreviousLink size={24} />
              </button>
            )}
            <span className="textParagraph">{page}</span>
            <button title="Próxima página" onClick={() => plusOnePage()}>
              <GrFormNextLink size={24} />
            </button>
          </div>
          <UsersList />
          <div className={styles.topPageBox}>
            <a href="#headerSection" className="title2">
              <BsFillArrowUpCircleFill size={40} />
            </a>
          </div>
        </TemplatePage>
      )}
    </>
  );
};
