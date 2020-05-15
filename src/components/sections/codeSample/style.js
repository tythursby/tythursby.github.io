import Gist from "react-gist";
import styled from "styled-components";

export const StyledGist = styled(Gist)``;

export const SampleImageRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    padding: 0.25rem;
  }
`;
export const SampleImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 2px;
`;
export const IframeWrapper = styled.div`
  position: relative;
  margin: 1rem;
  padding-bottom: 56.25%;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
