import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.75rem;
  margin: 0;
  margin-right: 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.textColor};
  font-weight: 500;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :active {
    box-shadow: none;
  }
  :hover {
    cursor: pointer;
  }
  ${(props) =>
    props.Nav &&
    `
    background: none;
    color: ${props.background};
    margin:0;
    box-shadow: none;
    @media screen and (min-width: 768px) {
      display: none;
      float: right;
    }
  `}
`;

export const StyledAnchor = styled.a`
  padding: 0.75rem;
  margin-right: 1rem;
  border: none;
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 4px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.textColor};
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :active {
    box-shadow: none;
  }
  :hover {
    cursor: pointer;
  }
`;
