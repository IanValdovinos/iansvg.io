import { useEffect, useState } from "react";
import HeadingThree from "../HeadingThree";
import styles from "./ContactMeForm.module.css";
import PrimaryButton from "../PrimaryButton";
import api from "../../api/axios";

import { ThreeDot } from "react-loading-indicators";

// Import media
// import SendIcon from "../../assets/icons/send.svg";

function ContactMeForm({ display, onClickBackground }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (name, email, message) => {
    const response = await api.post("/send-email", {
      name,
      email,
      message,
    });
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      await sendEmail(name, email, message);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset form state when display changes
    if (!display) {
      setLoading(false);
      setSuccess(false);
      setError(null);
    }
  }, [display]);

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

          <div className={styles.buttonContainer}>
            {!loading && !success ? (
              <PrimaryButton className={styles.submitButton}>
                Send
              </PrimaryButton>
            ) : null}

            {loading ? (
              <ThreeDot
                width={30}
                height={30}
                color={["var(--primary-color-one)", "var(--primary-color-two)"]}
                duration={1000}
                className={styles.loadingIcon}
              />
            ) : null}

            {success ? (
              <headingThree className={styles.successMessage}>
                Message sent successfully!
              </headingThree>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactMeForm;
