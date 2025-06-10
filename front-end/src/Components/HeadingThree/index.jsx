import styles from "./HeadingThree.module.css";

function HeadingThree({ className, children }) {
  return <h3 className={`${className} ${styles.h3}`}>{children}</h3>;
}

export default HeadingThree;
