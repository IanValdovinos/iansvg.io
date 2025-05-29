import styles from "./Homepage.module.css";

// Import Components
import Banner from "../Components/Banner";
import HeadingTwo from "../Components/HeadingTwo";
import SectionContainer from "../Components/SectionContainer";
import ProjectCard from "../Components/ProjectCard";
import PrimaryButton from "../Components/PrimaryButton";
import AnimatedLink from "../Components/AnimatedLink";
import CertificateCard from "../Components/CertificateCard";

// Import Media
import ProjectImageOne from "../assets/images/test_project_image.png";

import CertificateOne from "../assets/images/certificates/AI_A-Z.jpg";
import CertificateTwo from "../assets/images/certificates/DS_codecademy.jpg";
import CertificateThree from "../assets/images/certificates/React_codecademy.jpg";
// import CertificateFour from "../assets/images/certificates/DFSS_Green_Belt.jpg";
import CertificateFive from "../assets/images/certificates/msu_cs_diploma.jpg";
// import CertificateSix from "../assets/images/certificates/amazon_sigma_award.JPG";
import ParagraphOne from "../Components/ParagraphOne";
import TechStack from "../Components/TechStack";

function Homepage() {
  return (
    <main>
      {/* Banner */}
      <SectionContainer>
        <Banner />
      </SectionContainer>

      {/* About Me */}
      <SectionContainer className={styles.aboutMeSection}>
        <HeadingTwo>About Me</HeadingTwo>
        <ParagraphOne>
          I'm a software engineer with a Bachelor's in Computer Science from
          Michigan State University, class of 2024. Currently, I work at General
          Motors as a Vehicle Performance Engineer, where I blend my technical
          background with a passion for innovation. I love building software
          solutions that make a real impact—and when I'm not coding, you'll
          likely find me deep into a video game or playing a round of Magic: The
          Gathering.
        </ParagraphOne>
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

      {/* Tech Stack Section */}
      <SectionContainer className={styles.techStackSection}>
        <TechStack />
      </SectionContainer>

      {/* Certificates & Awards */}
      <SectionContainer>
        <HeadingTwo>Certificates & Awards</HeadingTwo>
        <div className={styles.certificatesContainer}>
          <CertificateCard
            image={CertificateFive}
            title={"Michigan State University Computer Science Diploma"}
          />
          {/* <CertificateCard
            image={CertificateSix}
            title={"Amazon Sigma Award: Best Overall Experience"}
          /> */}
          <CertificateCard
            image={CertificateOne}
            title={
              "Artificial Intelligence A-Z 2025: Agentic AI, Gen AI, and RL Certificate"
            }
          />
          <CertificateCard
            image={CertificateTwo}
            title={"Complex Data Structues Codecademy Certificate"}
          />
          <CertificateCard
            image={CertificateThree}
            title={"React Codecademy Certificate"}
          />
          {/* <CertificateCard
            image={CertificateFour}
            title={"DFSS Green Belt Certificate"}
          /> */}
        </div>
        <AnimatedLink className={styles.seeMoreCertificatesButton}>
          See more
        </AnimatedLink>
      </SectionContainer>
    </main>
  );
}

export default Homepage;
