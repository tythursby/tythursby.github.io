import React from "react";
import { StyledFooter, DateDiv } from "./style";

const date = new Date().getFullYear().toString();

const WithFooter = () => {
  return (
    <StyledFooter>
      <DateDiv>
        &copy;
        {date}
        {' '}
        TT
      </DateDiv>
    </StyledFooter>
  );
};

export default WithFooter;
