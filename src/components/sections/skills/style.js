import styled from "styled-components";

export const SkillName = styled.h3``;
export const SkillBar = styled.div`
  position: relative;
  height: 1.5rem;
  border-radius: 25px;
  background: #555;
  padding: 5px;
  max-width: 100%;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`;
export const SkillFill = styled.span`
  display: block;
  background-color: ${(props) => props.theme.skills};
  width: ${(props) => props.fill};
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: linear-gradient(center bottom, rgb(43, 194, 83) 37%, rgb(84, 240, 84) 69%);
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
`;
