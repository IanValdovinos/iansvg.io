import ParagraphOne from "../ParagraphOne";
import styles from "./TechStackItem.module.css";

function TechStackItem({ name, icon }) {
  return (
    <div className={styles.item}>
      <div className={styles.innerContainer}>
        <img src={icon} alt={`${name} icon`} />
        <ParagraphOne>{name}</ParagraphOne>
      </div>
    </div>
  );
}

export default TechStackItem;
