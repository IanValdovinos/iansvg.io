import styles from "./HeadingOne.module.css";

function HeadingOne({ className, children }) {
  return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
}

export default HeadingOne;
