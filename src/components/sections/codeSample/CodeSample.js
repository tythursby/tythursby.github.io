import React from "react";
import { StyledGist, IframeWrapper, SampleImageRow, SampleImage, ImageContainer } from "./style";
import dubiMobile from "../../../assets/images/dubi_mobile.png";
import dubiMobile2 from "../../../assets/images/dubi_mobile2.png";
import dubiMobile3 from "../../../assets/images/dubi_mobile3.png";
import {
  StyledSection,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionTitle
} from "../sectionStyles";

const CodeSample = ({ id }) => {
  return (
    <StyledSection id={id}>
      <h2>Code Sample</h2>
      <SectionContainer flexDirection="column">
        <SectionContent>
          <SectionTitle>Mapping a solution...</SectionTitle>
          <SectionDescription>
            A recent project involved very unorganized client data. The bulk of the data was not
            arranged into appropriate objects or arrays, and was difficult to work with as JSON. I
            mapped through multiple layers of data to group like items by their id, and create new
            Objects of categorically similar items in memory.
          </SectionDescription>
          <StyledGist id="ddfb02466b616aecbc49163d52d2e3e2" />
        </SectionContent>
        <SectionContent>
          <SectionTitle>VueJS Admin Web App</SectionTitle>
          <IframeWrapper>
            <iframe
              title="Vue Admin App"
              src="https://www.youtube.com/embed/ug_Ox-uyBWo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </IframeWrapper>
          <SectionDescription>
            A custom inventory control application that I developed for a client in VueJS with MDB
            styling. Updates POST onBlur and dragEnd events. Image uploads trigger a crop tool modal
            before POST.
          </SectionDescription>
          <SectionDescription sub>VueJS | MDB | JSON | CRUD | AXIOS </SectionDescription>
        </SectionContent>
        <SectionContent>
          <SectionTitle>More Apps</SectionTitle>
          <SectionDescription>
            In 2017 I Co-Founded a start up company making HIPPA compliant software for the medical
            cannabis industry. Some of the applications I designed and developed include - a patient
            sign up kiosk tablet app, mobile patient portal / e-commerce app, menu kiosk app, and a
            web based admin app.
          </SectionDescription>
          <SectionDescription sub>
            React-Native | Redux | JSON | Android Studio | Xcode
            {" "}
          </SectionDescription>
          <SampleImageRow>
            <ImageContainer>
              <SampleImage src={dubiMobile} />
            </ImageContainer>
            <ImageContainer>
              <SampleImage src={dubiMobile2} />
            </ImageContainer>
            <ImageContainer>
              <SampleImage src={dubiMobile3} />
            </ImageContainer>
          </SampleImageRow>
        </SectionContent>
        <SectionContent>
          <SectionTitle>Websites</SectionTitle>
          <SectionDescription>
            <a
              href="http://gainesvillepodiatry.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label=""
            >
              GainesvillePodiatry.com
            </a>
            {" "}
            - Site I re-designed and modernized for a client with an AngularJS SPA, hosted on a
            linux server. Their original version was built in the 90&apos;s!
          </SectionDescription>
          <SectionDescription>
            <a
              href="https://compassionate.cloud"
              target="_blank"
              rel="noopener noreferrer"
              aria-label=""
            >
              Compassionate.cloud
            </a>
            {" "}
            - Wordpress site I built using Divi.
          </SectionDescription>
        </SectionContent>
      </SectionContainer>
    </StyledSection>
  );
};

export default CodeSample;
