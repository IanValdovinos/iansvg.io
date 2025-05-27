import React, { useState } from "react";
import styles from "./MobileNavbar.module.css";

function MobileNavbar({ onOptionSelect, onContactMeClick, children }) {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const openNavbar = () => {
    setNavbarVisible((prev) => !prev);
  };

  const handleOptionClick = () => {
    setNavbarVisible((prev) => !prev);
    onOptionSelect();
  };

  const handleContactMeClick = () => {
    handleOptionClick();
    onContactMeClick();
  };

  return (
    <>
      {/* Hamburger Button */}
      <svg
        onClick={openNavbar}
        className={styles.navbarButton}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>

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
