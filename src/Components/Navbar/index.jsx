import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar({ onContactMeClick, children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const Component = isMobile ? MobileNavbar : DesktopNavbar;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return <Component onContactMeClick={onContactMeClick}>{children}</Component>;
}

export default Navbar;
