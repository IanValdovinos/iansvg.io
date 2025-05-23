import styles from "./Homepage.module.css";

// Import Components
import Banner from "../Components/Banner";
import HeadingTwo from "../Components/HeadingTwo";
import SectionContainer from "../Components/SectionContainer";
import ProjectCard from "../Components/ProjectCard";
import PrimaryButton from "../Components/PrimaryButton";
import AnimatedLink from "../Components/AnimatedLink";
import TechStackItem from "../Components/TechStackItem";
import CertificateCard from "../Components/CertificateCard";

// Import Media
import ProjectImageOne from "../assets/images/test_project_image.png";

import TechStackImageOne from "../assets/icons/html.svg";
import TechStackImageTwo from "../assets/icons/css.svg";
import TechStackImageThree from "../assets/icons/javascript.svg";
import TechStackImageFour from "../assets/icons/docker.svg";
import TechStackImageFive from "../assets/icons/postgresql.svg";
import TechStackImageSix from "../assets/icons/reactjs.svg";
import TechStackImageSeven from "../assets/icons/css-modules.svg";
import TechStackImageEight from "../assets/icons/fastapi.svg";
import TechStackImageNine from "../assets/icons/git.svg";
import TechStackImageTen from "../assets/icons/github.svg";
import TechStackImageEleven from "../assets/icons/google-cloud.svg";
import TechStackImageTwelve from "../assets/icons/react-router-dom.svg";
import TechStackImageThirdteen from "../assets/icons/vitejs.svg";

import CertificateOne from "../assets/images/certificates/AI_A-Z.jpg";
import CertificateTwo from "../assets/images/certificates/DS_codecademy.jpg";
import CertificateThree from "../assets/images/certificates/React_codecademy.jpg";
import CertificateFour from "../assets/images/certificates/DFSS_Green_Belt.jpg";
import CertificateFive from "../assets/images/certificates/msu_cs_diploma.jpg";
import CertificateSix from "../assets/images/certificates/amazon_sigma_award.JPG";

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

      {/* Tech Stack Section */}
      <SectionContainer className={styles.techStackSection}>
        <HeadingTwo>Tech Stack</HeadingTwo>
        <div className={styles.techStackContainer}>
          <TechStackItem name={"HTML"} icon={TechStackImageOne} />
          <TechStackItem name={"CSS"} icon={TechStackImageTwo} />
          <TechStackItem name={"JavaScript"} icon={TechStackImageThree} />
          <TechStackItem name={"Docker"} icon={TechStackImageFour} />
          <TechStackItem name={"PostgreSQL"} icon={TechStackImageFive} />
          <TechStackItem name={"React"} icon={TechStackImageSix} />
          <TechStackItem name={"CSS Modules"} icon={TechStackImageSeven} />
          <TechStackItem name={"FastAPI"} icon={TechStackImageEight} />
          <TechStackItem name={"Git"} icon={TechStackImageNine} />
          <TechStackItem name={"GitHub"} icon={TechStackImageTen} />
          <TechStackItem name={"Google Cloud"} icon={TechStackImageEleven} />
          <TechStackItem name={"React Router"} icon={TechStackImageTwelve} />
        </div>
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
