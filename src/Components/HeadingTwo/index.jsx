import styles from "./HeadingTwo.module.css";

function HeadingTwo({ children }) {
  return <h2 className={styles.h2}>{children}</h2>;
}

export default HeadingTwo;
