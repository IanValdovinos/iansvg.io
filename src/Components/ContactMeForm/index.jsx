import styles from "./ContactMeForm.module.css";

function ContactMeForm({ display }) {
  return (
    <>
      <div
        style={{
          backdropFilter: display ? "blur(5px)" : "blur(0)",
          zIndex: display ? "5" : "-1",
        }}
        className={styles.screen}
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
