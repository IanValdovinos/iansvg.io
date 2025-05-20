import Typewriter from "typewriter-effect";
import styles from "./Banner.module.css";

// Components
import HeadingOne from "../HeadingOne";

// Media
import ProfilePicture from "../../assets/images/ghibli_me.png";
import PrimaryButton from "../PrimaryButton";
import AnimatedLink from "../AnimatedLink";

function Banner() {
  return (
    <header className={styles.banner}>
      {/* Memoji PNG */}
      <div className={styles.profilePicContainer}>
        <img
          className={styles.memoji}
          src={ProfilePicture}
          alt="Ian's profile picture"
        />
      </div>

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

      {/* Action buttons */}
      <div className={styles.buttonContainer}>
        <PrimaryButton>Let's Connect</PrimaryButton>
        <AnimatedLink className={styles.link}>Learn about me</AnimatedLink>
      </div>
    </header>
  );
}

export default Banner;
