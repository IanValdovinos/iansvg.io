import styles from "./PrimaryButton.module.css";

function PrimaryButton({ className, children }) {
  return (
    <button className={`${className} ${styles.button}`}>
      <div className={styles.glow}>
        <div className={styles.buttonInner}>
          <span className={styles.buttonText}>{children}</span>
        </div>
      </div>
    </button>
  );
}

export default PrimaryButton;
