import styles from "./About.module.css";

import HeadingOne from "../Components/HeadingOne";
import HeadingThree from "../Components/HeadingThree";
import HeadingTwo from "../Components/HeadingTwo";
import ParagraphOne from "../Components/ParagraphOne";
import SectionContainer from "../Components/SectionContainer";
import TechStack from "../Components/TechStack";
import UseItem from "../Components/UseItem";

// Media
import VSCodeLogo from "../assets/icons/vscode.svg";
import GoogleCalendarLogo from "../assets/icons/google-calendar.svg";
import GoogleCloudLogo from "../assets/icons/google-cloud-black.svg";
import GoogleDriveLogo from "../assets/icons/google-drive.svg";
import NotionLogo from "../assets/icons/notion.svg";
import SlackLogo from "../assets/icons/slack.svg";

function About() {
  return (
    <main>
      {/* About Me Introduction */}
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

      {/* Tech Stack */}
      <SectionContainer>
        <TechStack />
      </SectionContainer>

      {/* What I Use */}
      <SectionContainer>
        <HeadingTwo>What I Use</HeadingTwo>
        <HeadingThree>Productivity</HeadingThree>
        <div className={styles.productivityUseItemsContainer}>
          <UseItem logo={VSCodeLogo} name={"VSCode"} since={"2017.08"} />
          <UseItem
            logo={GoogleCalendarLogo}
            name={"Google Calendar"}
            since={"2017.08"}
          />
          <UseItem logo={GoogleCloudLogo} name={"VSCode"} since={"2017.08"} />
          <UseItem
            logo={GoogleDriveLogo}
            name={"Google Drive"}
            since={"2017.08"}
          />
          <UseItem logo={NotionLogo} name={"Notion"} since={"2017.08"} />
          <UseItem logo={SlackLogo} name={"Slack"} since={"2017.08"} />
        </div>
      </SectionContainer>
    </main>
  );
}

export default About;
