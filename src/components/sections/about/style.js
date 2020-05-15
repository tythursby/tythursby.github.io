import styled from "styled-components";

export const StyledImg = styled.img`
  border-radius: 100%;
  height: 200px;
  width: 200px;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 0.75rem;
  @media screen and (max-width: 768px) {
    height: 10rem;
    width: 10rem;
    padding: 0.4rem;
  }
`;

export const AboutButtonRow = styled.div`
  display: flex;
  margin-top: auto;
  width: 100%;
  a {
    align-self: center;
  }
  a#dl {
    margin-left: auto;
  }
  svg#linkedIn {
    color: #4875b4;
  }
  svg#gitHub {
    color: ;
  }
  @media screen and (max-width: 768px) {
    display: block;
    a {
      margin-bottom: 1rem;
    }
    a#hire {
      display: inline-block;
      float: right;
    }
    a#dl {
      display: inline-block;
      float: right;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  margin: 1rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 0;
  }
`;
