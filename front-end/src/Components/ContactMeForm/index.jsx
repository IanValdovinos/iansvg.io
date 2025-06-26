import { useState } from "react";
import HeadingThree from "../HeadingThree";
import styles from "./ContactMeForm.module.css";
import PrimaryButton from "../PrimaryButton";

// Import media
// import SendIcon from "../../assets/icons/send.svg";

function ContactMeForm({ display, onClickBackground }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default browser reload
    alert(
      "Feature under construction! Please email me directly at ian.valdovinos752001@gmail.com."
    );
  };

  return (
    <>
      {/* BACKGROUND BLURRED SCREEN */}
      <div
        style={{
          backdropFilter: display ? "blur(7px)" : "blur(0)",
          WebkitBackdropFilter: display ? "blur(7px)" : "blur(0)", // Safari support
          zIndex: display ? "5" : "-1",
        }}
        className={styles.screen}
        onClick={onClickBackground}
      ></div>

      {/* FORM CONTAINER */}
      <div
        style={{
          transform: display ? "translate(-50%, 0%)" : "translate(-50%, 100%)",
        }}
        className={styles.formContainer}
      >
        <HeadingThree>Contact Me</HeadingThree>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameEmailContainer}>
            {/* First Name */}
            <div className={styles.labelInputContainer}>
              <label htmlFor="name">Name:</label>
              <input
                className={styles.input}
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className={styles.labelInputContainer}>
              <label htmlFor="email">Email:</label>
              <input
                className={styles.input}
                id="email"
                type="text"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className={styles.labelInputContainer}>
            <label htmlFor="message">Message:</label>
            <textarea
              className={`${styles.messageTextArea} ${styles.input}`}
              id="message"
              placeholder="What would you like to discuss?"
              value={message}
              rows={7}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <PrimaryButton>Send</PrimaryButton>
        </form>
      </div>
    </>
  );
}

export default ContactMeForm;
