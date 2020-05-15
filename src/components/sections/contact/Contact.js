import React from "react";
import ContactForm from "./ContactForm";
import {
  StyledSection,
  SectionContainer,
  SectionContent,
  SectionDescription
} from "../sectionStyles";

const Contact = ({ id }) => {
  return (
    <StyledSection id={id}>
      <h2>CONTACT</h2>
      <SectionContainer>
        <SectionContent>
          <SectionDescription>
            Please feel free to get in touch regarding freelance work, open full-time positions, or
            contract work available!
          </SectionDescription>
          <ContactForm />
        </SectionContent>
      </SectionContainer>
    </StyledSection>
  );
};

export default Contact;
