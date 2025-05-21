import styles from "./Homepage.module.css";

// Import Components
import Banner from "../Components/Banner";
import HeadingTwo from "../Components/HeadingTwo";
import SectionContainer from "../Components/SectionContainer";
import ProjectCard from "../Components/ProjectCard";

// Import Media
import ProjectImageOne from "../assets/images/test_project_image.png";
import PrimaryButton from "../Components/PrimaryButton";

function Homepage() {
  return (
    <main>
      {/* Banner */}
      <SectionContainer>
        <Banner />
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer className={styles.projectsSection}>
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
      </SectionContainer>
    </main>
  );
}

export default Homepage;
