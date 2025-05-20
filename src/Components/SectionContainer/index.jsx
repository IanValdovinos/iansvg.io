import styles from "./SectionContainer.module.css";

function SectionContainer({ className, children }) {
  return <div className={`${className} ${styles.container}`}>{children}</div>;
}

export default SectionContainer;
