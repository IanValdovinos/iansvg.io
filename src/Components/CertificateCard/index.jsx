import styles from "./CertificateCard.module.css";

function CertificateCard({ image, title }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
    </div>
  );
}

export default CertificateCard;
