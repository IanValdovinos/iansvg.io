import styles from "./TechStack.module.css";

import TechStackItem from "../TechStackItem";
import HeadingTwo from "../HeadingTwo";

import TechStackImageOne from "../../assets/icons/html.svg";
import TechStackImageTwo from "../../assets/icons/css.svg";
import TechStackImageThree from "../../assets/icons/javascript.svg";
import TechStackImageFour from "../../assets/icons/docker.svg";
import TechStackImageFive from "../../assets/icons/postgresql.svg";
import TechStackImageSix from "../../assets/icons/reactjs.svg";
import TechStackImageSeven from "../../assets/icons/css-modules.svg";
import TechStackImageEight from "../../assets/icons/fastapi.svg";
import TechStackImageNine from "../../assets/icons/git.svg";
import TechStackImageTen from "../../assets/icons/github.svg";
import TechStackImageEleven from "../../assets/icons/google-cloud.svg";
import TechStackImageTwelve from "../../assets/icons/react-router-dom.svg";
import TechStackImageThirdteen from "../../assets/icons/eslint.svg";
import TechStackImageFourteen from "../../assets/icons/firebase.svg";
import TechStackImageFifteen from "../../assets/icons/vitejs.svg";
// import TechStackImageThirdteen from "../../assets/icons/vitejs.svg";

function TechStack() {
  return (
    <>
      <HeadingTwo>Tech Stack</HeadingTwo>
      <div className={styles.techStackContainer}>
        <TechStackItem name={"HTML"} icon={TechStackImageOne} />
        <TechStackItem name={"CSS"} icon={TechStackImageTwo} />
        <TechStackItem name={"JavaScript"} icon={TechStackImageThree} />
        <TechStackItem name={"React"} icon={TechStackImageSix} />
        <TechStackItem name={"Vite.js"} icon={TechStackImageFifteen} />
        <TechStackItem name={"ESLint"} icon={TechStackImageThirdteen} />
        <TechStackItem name={"React Router"} icon={TechStackImageTwelve} />
        <TechStackItem name={"CSS Modules"} icon={TechStackImageSeven} />
        <TechStackItem name={"FastAPI"} icon={TechStackImageEight} />
        <TechStackItem name={"Git"} icon={TechStackImageNine} />
        <TechStackItem name={"GitHub"} icon={TechStackImageTen} />
        <TechStackItem name={"Google Cloud"} icon={TechStackImageEleven} />
        <TechStackItem name={"Firebase"} icon={TechStackImageFourteen} />
        <TechStackItem name={"Docker"} icon={TechStackImageFour} />
        <TechStackItem name={"PostgreSQL"} icon={TechStackImageFive} />
      </div>
    </>
  );
}

export default TechStack;
