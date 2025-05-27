import HeadingOne from "../Components/HeadingOne";
import ParagraphOne from "../Components/ParagraphOne";
import SectionContainer from "../Components/SectionContainer";
import TechStack from "../Components/TechStack";
import styles from "./About.module.css";

function About() {
  return (
    <main>
      <SectionContainer className={styles.aboutMeIntro}>
        <HeadingOne className={styles.aboutMeTitle}>About Me</HeadingOne>
        <ParagraphOne>
          Hello! 👋 I’m a software engineer with a Bachelor’s degree in Computer
          Science from Michigan State University, class of 2024. Currently, I
          work at General Motors as a Vehicle Performance Engineer, where I
          apply my passion for creating innovative software solutions. As a full
          stack engineer, I’ve built most of my experience through academic
          projects and personal work, and I’m excited to begin my career in AI
          and machine learning. Looking ahead, I’m passionate about developing
          software tools—whether mobile apps, web applications, or AI-powered
          solutions—that directly benefit the clients of the company I work for
          or enhance the efficiency of internal teams. When I’m not coding,
          you’ll find me playing video games or diving into Magic: The Gathering
          TCG.
        </ParagraphOne>
      </SectionContainer>

      <SectionContainer>
        <TechStack />
      </SectionContainer>
    </main>
  );
}

export default About;
