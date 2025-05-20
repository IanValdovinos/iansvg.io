import Typewriter from "typewriter-effect";
import styles from "./Banner.module.css";

// Components
import HeadingOne from "../HeadingOne";

// Media
import Memoji from "../../assets/images/memoji.png";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

function Banner() {
  return (
    <header className={styles.banner}>
      {/* Memoji PNG */}
      <img className={styles.memoji} src={Memoji} alt="Ian's Memoji" />

      {/* Page Title */}
      <span className={styles.bannerSubtitle}>Hi, I am</span>
      <HeadingOne>Ian Samuel Valdovinos Granados</HeadingOne>
      <span className={styles.bannerSubtitle}>
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Michigan State University Alumni",
              "Tech Enthusiast",
              "Magic: The Gathering Player",
              "Hello world",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 30,
            pauseFor: 2000,
          }}
        />
      </span>
      <div className={styles.buttonContainer}>
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </div>
    </header>
  );
}

export default Banner;
