import React from "react";
import ReactDOM from "react-dom";
import { StyledBackdrop } from "./style";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <StyledBackdrop
      onClick={props.onClick}
      onKeyPress={props.onClick}
      aria-label="Close modal"
      role="button"
      tabIndex="0"
    />,
    document.getElementById("backdrop-hook"),
  );
};

export default Backdrop;
