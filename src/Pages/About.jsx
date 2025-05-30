import styles from "./About.module.css";

import HeadingOne from "../Components/HeadingOne";
import HeadingThree from "../Components/HeadingThree";
import HeadingTwo from "../Components/HeadingTwo";
import ParagraphOne from "../Components/ParagraphOne";
import SectionContainer from "../Components/SectionContainer";
import TechStack from "../Components/TechStack";
import UseItem from "../Components/UseItem";
import WorkExperience from "../Components/WorkExperience";

// Media
import VSCodeLogo from "../assets/icons/vscode.svg";
import GoogleCalendarLogo from "../assets/icons/google-calendar.svg";
import GoogleCloudLogo from "../assets/icons/google-cloud-black.svg";
import GoogleDriveLogo from "../assets/icons/google-drive.svg";
import NotionLogo from "../assets/icons/notion.svg";
import SlackLogo from "../assets/icons/slack.svg";
import CanvaLogo from "../assets/icons/canva.svg";
import ChatGPTLogo from "../assets/icons/chatgpt.svg";
import DiscordLogo from "../assets/icons/discord.svg";
import FigmaLogo from "../assets/icons/figma.svg";
import iCloudLogo from "../assets/icons/icloud.svg";
import Microsoft365Logo from "../assets/icons/microsoft-365.svg";
import SquarespaceLogo from "../assets/icons/squarespace.svg";
import TrelloLogo from "../assets/icons/trello.svg";
import UdemyLogo from "../assets/icons/udemy.svg";
import CellularLogo from "../assets/icons/cellular.svg";
import DisneyPlusLogo from "../assets/icons/disney-plus.svg";
import NetflixLogo from "../assets/icons/netflix.svg";
import SpotifyLogo from "../assets/icons/spotify.svg";
import XboxLogo from "../assets/icons/xbox.svg";
import YouTubeLogo from "../assets/icons/youtube.svg";

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

      {/* Work Experience */}
      <SectionContainer>
        <HeadingTwo>Work Experience</HeadingTwo>

        <WorkExperience />
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer>
        <TechStack />
      </SectionContainer>

      {/* What I Use */}
      <SectionContainer>
        <HeadingTwo>What I Use</HeadingTwo>

        {/* Productivity */}
        <HeadingThree className={styles.usesTitle}>Productivity</HeadingThree>
        <div className={styles.useItemsContainer}>
          <UseItem logo={VSCodeLogo} name={"VSCode"} since={"2017"} />
          <UseItem
            logo={GoogleCalendarLogo}
            name={"Google Calendar"}
            since={"2020"}
          />
          <UseItem
            logo={GoogleCloudLogo}
            name={"Google Cloud"}
            since={"2022"}
          />
          <UseItem
            logo={GoogleDriveLogo}
            name={"Google Drive"}
            since={"2018"}
          />
          <UseItem logo={NotionLogo} name={"Notion"} since={"2020"} />
          <UseItem logo={SlackLogo} name={"Slack"} since={"2022"} />
          <UseItem logo={CanvaLogo} name={"Canva"} since={"2021"} />
          <UseItem logo={ChatGPTLogo} name={"ChatGPT"} since={"2022"} />
          <UseItem logo={DiscordLogo} name={"Discord"} since={"2018"} />
          <UseItem logo={FigmaLogo} name={"Figma"} since={"2024"} />
          <UseItem logo={iCloudLogo} name={"iCloud"} since={"2020"} />
          <UseItem
            logo={Microsoft365Logo}
            name={"Microsoft 365"}
            since={"2011"}
          />
          <UseItem logo={SquarespaceLogo} name={"Squarespace"} since={"2022"} />
          <UseItem logo={TrelloLogo} name={"Trello"} since={"2022"} />
          <UseItem logo={UdemyLogo} name={"Udemy"} since={"2018"} />
        </div>

        {/* Lifestyle Services */}
        <HeadingThree className={styles.usesTitle}>
          Lifestyle Services
        </HeadingThree>
        <div className={styles.useItemsContainer}>
          <UseItem logo={CellularLogo} name={"Mint Mobile"} since={"2020"} />
          <UseItem logo={SpotifyLogo} name={"Spotify"} since={"2018"} />
          <UseItem logo={YouTubeLogo} name={"YouTube Premium"} since={"2022"} />
          <UseItem logo={DisneyPlusLogo} name={"Disney Plus"} since={"2019"} />
          <UseItem logo={NetflixLogo} name={"Netflix"} since={"2015"} />
          <UseItem logo={XboxLogo} name={"XBOX"} since={"2010"} />
        </div>
      </SectionContainer>
    </main>
  );
}

export default About;
