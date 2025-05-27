import HeadingOne from "../Components/HeadingOne";
import SectionContainer from "../Components/SectionContainer";
import styles from "./About.module.css";

function About() {
  return (
    <main>
      <SectionContainer className={styles.aboutMeIntro}>
        <HeadingOne>About Me</HeadingOne>
      </SectionContainer>
    </main>
  );
}

export default About;
