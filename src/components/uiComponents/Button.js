import React from "react";
import { StyledButton, StyledAnchor } from "./style";

const Button = ({
  children,
  Nav,
  background,
  id,
  type,
  onClick,
  href,
  target,
  download,
  textColor
}) => {
  return (
    <>
      {href ? (
        <StyledAnchor
          href={href}
          id={id}
          target={target}
          rel="noopener noreferrer"
          download={download}
          background={background}
          textColor={textColor}
        >
          {children}
        </StyledAnchor>
      ) : (
        <StyledButton
          type={type}
          Nav={Nav}
          background={background}
          id={id}
          onClick={onClick}
          textColor={textColor}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
