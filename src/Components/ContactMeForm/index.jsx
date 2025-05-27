import styles from "./ContactMeForm.module.css";

function ContactMeForm({ display, onClickBackground }) {
  return (
    <>
      <div
        style={{
          backdropFilter: display ? "blur(7px)" : "blur(0)",
          WebkitBackdropFilter: display ? "blur(7px)" : "blur(0)", // Safari support
          zIndex: display ? "5" : "-1",
        }}
        className={styles.screen}
        onClick={onClickBackground}
      ></div>
      <div
        style={{
          transform: display ? "translate(-50%, 0%)" : "translate(-50%, 100%)",
        }}
        className={styles.form}
      >
        hello form
      </div>
    </>
  );
}

export default ContactMeForm;
