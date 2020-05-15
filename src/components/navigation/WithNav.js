import React from "react";
import NavElements from "./NavElements";
import { StyledNav } from "./style";

const WithNav = () => {
  return (
    <StyledNav>
      <NavElements />
    </StyledNav>
  );
};

export default WithNav;
