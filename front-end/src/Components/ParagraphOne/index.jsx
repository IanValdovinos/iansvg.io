import styles from "./ParagraphOne.module.css";

function ParagraphOne({ className, children }) {
  return <p className={`${className} ${styles.p}`}>{children}</p>;
}

export default ParagraphOne;
