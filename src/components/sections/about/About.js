import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import Resume from "../../../assets/Tyler_Thursby_Resume.pdf";
import profilePic from "../../../assets/images/profilePic.jpg";
import Button from "../../uiComponents/Button";
import {
  StyledSection,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionTitle
} from "../sectionStyles";
import { StyledImg, AboutButtonRow, ImageContainer } from "./style";

const About = ({ id }) => {
  return (
    <StyledSection id={id}>
      <h2>ABOUT</h2>
      <SectionContainer flexDirection="row">
        <ImageContainer id="profilePic">
          <StyledImg src={profilePic} />
        </ImageContainer>
        <SectionContent>
          <SectionTitle>Tyler Scott Thursby</SectionTitle>
          <SectionDescription>
            Front-End Developer with a focus on MVC JavaScript frameworks + libraries, ES6 syntax,
            accessibility and functional components. I like to mess with and make cool things in my
            spare time.
          </SectionDescription>
          <SectionDescription sub>React | Redux | Bootstrap | ES6</SectionDescription>
          <SectionDescription code>
            (Composition &gt; Inheritance) && (Immutability === Predictability === Reliability)
          </SectionDescription>
          <SectionDescription sub>
            * Linux Enthusiast | Back-End Capable | Problem Solver
          </SectionDescription>
          <AboutButtonRow>
            <IconButton
              aria-label="go to github"
              href="https://github.com/tythursby"
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
              <Typography variant="srOnly">View GitHub</Typography>
            </IconButton>
            <IconButton
              aria-label="go to linkedIn"
              href="https://www.linkedin.com/in/tyler-thursby/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" id="linkedIn" />
              <Typography variant="srOnly">Find me on LinkedIn</Typography>
            </IconButton>
            <Button
              id="dl"
              background={(props) => props.theme.buttonPrimary}
              textColor="white"
              href={Resume}
              download="Tyler_Thursby_Resume.pdf"
              target="_blank"
            >
              Download Resumé 
              {' '}
              {"\u21E9"}
            </Button>
            <Button
              id="hire"
              background={(props) => props.theme.buttonPrimary}
              textColor="white"
              href="mailto:tythursby@gmail.com"
            >
              HIRE TYLER
            </Button>
          </AboutButtonRow>
        </SectionContent>
      </SectionContainer>
    </StyledSection>
  );
};

export default About;
