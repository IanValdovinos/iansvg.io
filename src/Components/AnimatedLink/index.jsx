import styles from "./AnimatedLink.module.css";

function AnimatedLink({ className, children }) {
  return (
    <span className={`${className} ${styles.link}`}>{children} &rarr;</span>
  );
}

export default AnimatedLink;
