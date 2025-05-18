import styles from "./HeadingOne.module.css";

function HeadingOne({ children }) {
  return <h1 className={styles.h1}>{children}</h1>;
}

export default HeadingOne;
