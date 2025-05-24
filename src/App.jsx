import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import PageNotFound from "./Pages/PageNotFound";
import SectionContainer from "./Components/SectionContainer";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContactMeForm from "./Components/ContactMeForm";

function App() {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const openContactForm = () => {
    setContactFormVisible((prev) => !prev);
  };

  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar onContactMeClick={openContactForm}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about-me"}>About Me</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
      </Navbar>

      {/* Contact Me Form */}
      <ContactMeForm display={isContactFormVisible} />

      {/* Page Content */}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about-me" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Footer */}
      <SectionContainer>
        <Footer />
      </SectionContainer>
    </BrowserRouter>
  );
}

export default App;
