import styles from "./ShiningSpan.module.css";

function ShiningSpan({ children }) {
  return <span className={styles.span}>{children}</span>;
}

export default ShiningSpan;
