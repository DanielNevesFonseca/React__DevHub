import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const TextArea = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.textAreaBox}>
      <label className="textHeadline">{label}</label>
      <textarea ref={ref} {...rest}></textarea>
      {error ? <p className="textHeadline">{error.message}</p> : null}
    </div>
  );
});
