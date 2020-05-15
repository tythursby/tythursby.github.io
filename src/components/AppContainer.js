import React from "react";
import About from "./sections/about/About";
import CodeSample from "./sections/codeSample/CodeSample";
import Resume from "./sections/resume/Resume";
import Skills from "./sections/skills/Skills";
import WithNav from "./navigation/WithNav";
import Contact from "./sections/contact/Contact";
import WithFooter from "./navigation/WithFooter";

const AppContainer = () => {
  return (
    <>
      <WithNav />
      <About id="about" />
      <CodeSample id="code" />
      <Resume id="exp" />
      <Skills id="skills" />
      <Contact id="contact" />
      <WithFooter />
    </>
  );
};

export default AppContainer;
