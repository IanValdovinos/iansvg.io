import React from "react";
import styles from "./DesktopNavbar.module.css";

function DesktopNavbar({ onOptionSelect, onContactMeClick, children }) {
  return (
    <nav className={styles.navbar}>
      {React.Children.map(children, (child, index) => (
        <div
          onClick={onOptionSelect}
          className={styles.navbarOption}
          key={index}
        >
          {child}
        </div>
      ))}

      <div className={styles.navbarOption}>
        <div onClick={onContactMeClick} className={styles.contactMeButton}>
          Contact Me
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavbar;
