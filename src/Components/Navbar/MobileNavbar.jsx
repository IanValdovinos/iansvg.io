import React, { useEffect, useState } from "react";
import styles from "./MobileNavbar.module.css";

import Hamburger from "hamburger-react";

function MobileNavbar({ onOptionSelect, onContactMeClick, children }) {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const handleOptionClick = () => {
    setNavbarVisible((prev) => !prev);
    onOptionSelect();
  };

  const handleContactMeClick = () => {
    setNavbarVisible((prev) => !prev);
    onContactMeClick();
  };

  return (
    <>
      <div className={styles.navbarButton}>
        <Hamburger toggled={isNavbarVisible} toggle={setNavbarVisible} />
      </div>

      {/* Navigation Bar */}
      <nav
        style={{
          transform: isNavbarVisible
            ? "translate(0, 0%)"
            : "translate(0, -105%)",
        }}
        className={styles.navbar}
      >
        <div className={styles.optionContainer}>
          {React.Children.map(children, (child, index) => (
            <div
              onClick={handleOptionClick}
              className={styles.navbarOption}
              key={index}
            >
              {child}
            </div>
          ))}

          <div className={styles.navbarOption}>
            <span
              onClick={handleContactMeClick}
              className={styles.contactMeButton}
            >
              Contact Me
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileNavbar;
