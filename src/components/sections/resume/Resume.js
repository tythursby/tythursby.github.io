import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import Typography from "@material-ui/core/Typography";
import ResumePdf from "../../../assets/Tyler_Thursby_Resume.pdf";
import Button from "../../uiComponents/Button";
import {
  Download,
  Highlights,
  ResumeSection,
  ResumeContent,
  ResumeTitle,
  ResumeSubTitle
} from "./style";
import { StyledSection, SectionContainer, SectionContent } from "../sectionStyles";

const Resume = ({ id }) => {
  return (
    <StyledSection id={id}>
      <h2>Resumé</h2>
      <SectionContainer>
        <SectionContent resume>
          <Button
            id="viewResume"
            background={(props) => props.theme.buttonPrimary}
            textColor="white"
            href={ResumePdf}
            target="_blank"
          >
            View Full Doc
          </Button>
          <Highlights resume>Highlights</Highlights>
          <ResumeTitle>JavaScript Developer (3 years)</ResumeTitle>
          <ResumeSubTitle>EyeCite Meda</ResumeSubTitle>
          <ResumeSection>
            <ResumeContent>Hybrid Mobile Application ~5K daily active users</ResumeContent>
            <ResumeContent>New Patient Sign-Up Kiosk Application</ResumeContent>
            <ResumeContent>Admin Interface for Inventory Control System</ResumeContent>
          </ResumeSection>
          <ResumeTitle>CTO / Co-Founder (3 years)</ResumeTitle>
          <ResumeSubTitle>Dubi.cloud</ResumeSubTitle>
          <ResumeSection>
            <ResumeContent>
              Engineering a HIPPA compliant multi-tenant software platform and mobile application(s)
              for the medical cannabis industry
            </ResumeContent>
          </ResumeSection>
          <ResumeTitle>3D Artist Animator (4 years)</ResumeTitle>
          <ResumeSubTitle>Freelance</ResumeSubTitle>
          <ResumeSection>
            <ResumeContent>
              Stephen J Barlow Bluewater Exosuit Expedition: with National Geographic and the
              American Museum of Natural History
            </ResumeContent>
            <ResumeContent>
              University of Rhode Island’s Graduate School of Oceanography - Inner Space Center
              Internship
            </ResumeContent>
          </ResumeSection>

          <Download>
            <IconButton
              aria-label="Download my Resume"
              href={ResumePdf}
              target="_blank"
              download="Tyler_Thursby_Resume"
            >
              <GetAppIcon fontSize="large" id="downloadResume" />
              <Typography variant="srOnly">Download My Resume</Typography>
            </IconButton>
          </Download>
        </SectionContent>
      </SectionContainer>
    </StyledSection>
  );
};

export default Resume;
