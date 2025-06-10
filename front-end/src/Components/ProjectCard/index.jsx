import AnimatedLink from "../AnimatedLink";
import HeadingThree from "../HeadingThree";
import ParagraphOne from "../ParagraphOne";
import styles from "./ProjectCard.module.css";

function ProjectCard({ coverImage, title, children }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.upperSection}>
        {/* Project cover */}
        <div className={styles.imageContainer}>
          <img src={coverImage} alt={`${title} project cover`} />
        </div>

        {/* Project Title */}
        <HeadingThree className={styles.title}>{title}</HeadingThree>

        {/* Project Description */}
        <ParagraphOne>{children}</ParagraphOne>
      </div>

      {/* Action Buttons */}
      <div className={styles.bottomSection}>
        <AnimatedLink className={styles.demoLink}>Live Demo</AnimatedLink>
      </div>
    </div>
  );
}

export default ProjectCard;
