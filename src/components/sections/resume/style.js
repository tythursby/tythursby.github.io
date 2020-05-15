import styled from "styled-components";

export const Download = styled.div`
  a {
    float: right;
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    background-color: #4284c2;
    color: white;
    :hover {
      background-color: ${(props) => props.theme.buttonPrimary};
    }
  }
`;
export const Highlights = styled.h3`
  background-color: #a5fc36;
  display: inline-block;
  padding: 0.5rem;
`;
export const ResumeTitle = styled.h4``;
export const ResumeSubTitle = styled.h5`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 1rem;
`;
export const ResumeSection = styled.ul``;
export const ResumeContent = styled.li`
  line-height: 1.5rem;
`;
