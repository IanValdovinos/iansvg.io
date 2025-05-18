import Typewriter from "typewriter-effect";
import styles from "./Banner.module.css";

// Components
import HeadingOne from "../HeadingOne";

function Banner() {
  return (
    <header className={styles.banner}>
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
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 30,
            pauseFor: 2000,
          }}
        />
      </span>
    </header>
  );
}

export default Banner;
