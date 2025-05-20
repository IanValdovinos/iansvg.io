import styles from "./SecondaryButton.module.css";

function SecondaryButton({ className, children }) {
  return (
    <button className={`${className} ${styles.button}`}>
      <span className={styles.buttonText}>{children} &rarr;</span>
    </button>
  );
}

export default SecondaryButton;
