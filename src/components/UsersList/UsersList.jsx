import { useContext } from "react";
import { UsersContext } from "../../providers/UsersContext";
import { UsersCard } from "./UsersCard/UsersCard";
import styles from "./styles.module.scss";

export const UsersList = () => {
  const { usersList } = useContext(UsersContext);

  return (
    <section className={styles.usersSection}>
      <ul>
        {usersList.map((user) => {
          return <UsersCard user={user} key={user.id} />;
        })}
      </ul>
    </section>
  );
};
