import HeadingTwo from "../HeadingTwo";
import ProjectCard from "../ProjectCard";
import PrimaryButton from "../PrimaryButton";

import styles from "./ProjectHighlights.module.css";

// Import Media
import ProjectImageOne from "../../assets/images/test_project_image.png";

function ProjectHighlights() {
  return (
    <>
      <HeadingTwo>Project Highlights</HeadingTwo>
      <div className={styles.projectsContainer}>
        <ProjectCard title={"First Project"} coverImage={ProjectImageOne}>
          Real-time mock interviews with AI, no forms or clicks just natural,
          personalized conversations.
        </ProjectCard>

        <ProjectCard title={"First Project"} coverImage={ProjectImageOne}>
          Real-time mock interviews with AI, no forms or clicks just natural,
          personalized conversations.
        </ProjectCard>

        <ProjectCard title={"First Project"} coverImage={ProjectImageOne}>
          Real-time mock interviews with AI, no forms or clicks just natural,
          personalized conversations.
        </ProjectCard>
      </div>
      <PrimaryButton className={styles.projectsButton}>
        See All Projects
      </PrimaryButton>
    </>
  );
}

export default ProjectHighlights;
