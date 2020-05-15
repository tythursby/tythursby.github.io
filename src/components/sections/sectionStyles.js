import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 100%;
  text-align: left;
  padding-left: 2rem;
  padding-right: 2rem;
  h2 {
    margin-top: 0;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid #2bc8be;
    display: inline-block;
    font-weight: 500;
  }
  iframe {
    width: 100%;
    height: auto;
    border-radius: 2px;
  }
  :before {
    content: "";
    display: block;
    margin-top: -4rem;
    padding-top: 6rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    background-color: ${(props) => props.theme.primary};
    font-size: 90%;
    h2 {
      margin-left: 1rem;
      font-size: 1.3rem;
    }
  }
  @media screen and (min-width: 1250px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    box-shadow: none;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
  ${(props) =>
    props.resume &&
    `
    display: block;
    padding: 1rem;
    a#viewResume {
      float: right;
    }
  `}
  div.MuiFormControl-root.MuiTextField-root {
    display: flex;
  }
  button {
    float: right;
  }
  #contact {
    display: flex;
  }
`;
export const SectionDescription = styled.p`
  line-height: 1.6rem;
  a {
    color: ${(props) => props.theme.buttonPrimary};
  }
  ${(props) =>
    props.sub &&
    `
    color: #868383;
    font-style: italic;
  `}
  ${(props) =>
    props.code &&
    `
    background-color: #484e4d;
    color: #00ff11;
    display: inline-block;
    padding: .25rem;
    border-radius: 3px;
    font-family: ubuntu;
  `}
`;
export const SectionTitle = styled.h3``;
