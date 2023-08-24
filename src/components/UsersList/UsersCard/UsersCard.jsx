import styles from "./styles.module.scss";
import { RxAvatar } from "react-icons/rx";

export const UsersCard = ({ user }) => {
  const techsList = user.techs;
  return (
    <li className={styles.usersCard}>
      <div className={styles.userPictureBox}>
        <picture>
          {user.avatar_url === null ? (
            <RxAvatar size={72} />
          ) : (
            <img src={user.avatar} alt="Foto do usuário" />
          )}
        </picture>
      </div>
      <div className={styles.infoBox}>
        <h2 className="title2">{user.name}</h2>
        <p className="textHeadline">{user.course_module}</p>
        <span className="textHeadline">{user.bio}</span>
      </div>
      <div className={styles.techsBox}>
        <h2 className="title2">Techs</h2>
        <ul>
          {techsList.length === 0 ? (
            <li key={user.id}>
              <span className="textHeadline">Vazio...</span>
            </li>
          ) : (
            techsList.map((techs) => (
              <li key={techs.id}>
                <span className="textHeadline">{techs.title}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </li>
  );
};
