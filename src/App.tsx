import Layout from "./components/layout";
import HomePage from "./components/homepage";
import Skills from "./components/Skills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/componentStyles/layout.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/Contact";
import Projects from "./components/Projects";
import WritingCreative from "./components/Writing";
import Hobbies from "./components/Hobby";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      offset: 10,
    });
  }, []);
  return (
    <>
      <Layout />
      <HomePage />
      <AboutMe />
      <Skills />
      <Projects />
      <WritingCreative />
      <Hobbies />
      <ContactMe />

      <footer className="text-center py-4">
        <p className="text-muted">
          &copy; {new Date().getFullYear()} Ameer Hamza Athar. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
