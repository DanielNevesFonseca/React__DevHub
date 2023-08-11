import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const Input = forwardRef(({ label, error, id, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={id} className="textHeadline">
        {label}
      </label>
      <input id={id} ref={ref} {...rest} />
      {error ? <p className="textHeadline">{error.message}</p> : null}
    </div>
  );
});
