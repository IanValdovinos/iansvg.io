import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar({ onContactMeClick, children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const Component = isMobile ? MobileNavbar : DesktopNavbar;

  const handleOptionSelect = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <Component
      onContactMeClick={onContactMeClick}
      onOptionSelect={handleOptionSelect}
    >
      {children}
    </Component>
  );
}

export default Navbar;
