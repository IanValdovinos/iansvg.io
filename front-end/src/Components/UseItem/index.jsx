import ParagraphOne from "../ParagraphOne";
import styles from "./UseItem.module.css";

function UseItem({ logo, name, since }) {
  return (
    <div className={styles.useItem}>
      <img src={logo} alt={name} />
      <div className={styles.usesContainer}>
        <span className={styles.name}>{name}</span>
        <ParagraphOne>Since {since}</ParagraphOne>
      </div>
    </div>
  );
}

export default UseItem;
