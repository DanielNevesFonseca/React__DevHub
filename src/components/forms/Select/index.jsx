import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const Select = forwardRef(({ children, label, ...rest }, ref) => {
  return (
    <div className={styles.selectBox}>
      <label className="textHeadline">{label}</label>
      <select {...rest} ref={ref}>{children}</select>
    </div>
  );
});
