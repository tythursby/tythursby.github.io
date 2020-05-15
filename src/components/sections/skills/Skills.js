import React from "react";
import { SkillName, SkillBar, SkillFill } from "./style";
import { StyledSection, SectionContainer, SectionContent } from "../sectionStyles";

const skillsData = [
  { name: "HTML5", bar: "80%" },
  { name: "CSS3", bar: "70%" },
  { name: "ES6", bar: "75%" },
  { name: "React", bar: "65%" },
  { name: "Redux", bar: "55%" },
  { name: "React-Native", bar: "55%" },
  { name: "NodeJS", bar: "20%" },
  { name: "Ruby on Rails", bar: "30%" }
];

const Skills = ({ id }) => {
  return (
    <StyledSection id={id}>
      <h2>SKILLS</h2>
      <SectionContainer>
        <SectionContent>
          {skillsData.map((item) => (
            <React.Fragment key={item.name}>
              <SkillName>{item.name}</SkillName>
              <SkillBar>
                <SkillFill fill={item.bar} />
              </SkillBar>
            </React.Fragment>
          ))}
        </SectionContent>
      </SectionContainer>
    </StyledSection>
  );
};

export default Skills;
