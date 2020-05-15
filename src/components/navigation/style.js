import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent
  z-index: 100;
`;
export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100%;
  z-index: 100;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => props.theme.primary};
  vertical-align: middle;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    text-align: right;
    button {
      margin-left: auto;
    }
  }
`;
export const NavLi = styled.li`
  display: inline;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const NavUl = styled.ul`
  display: inline;
  line-height: 4rem;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuCard = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0.5rem;
  right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),
  0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
}


`;
export const MenuLink = styled.a`
  padding: 0.25rem;
  text-decoration: none;
  font-weight: 500;
  :active {
    color: inherit;
  }
  color: black;
`;
export const NavLink = styled.a`
  padding: 0.25rem;
  text-decoration: none;
  font-weight: 500;
  color: transparent;
  background: #3d7874;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  :hover {
    color: transparent;
    background: #2bc8be;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  }
  :focus {
    color: transparent;
    background: #2bc8be;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  border-top: 1px solid #c4bfc1;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  height: 15vh;
`;

export const DateDiv = styled.div`
  align-self: center;
`;
