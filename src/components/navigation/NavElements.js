import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import MenuModal from "./MenuModal";
import Button from "../uiComponents/Button";
import { MenuLink, NavUl, NavLi, NavLink } from "./style";

const linkItems = [
  { link: "About", to: "#about" },
  { link: "Code Sample", to: "#code" },
  { link: "Resumé", to: "#exp" },
  { link: "Skills", to: "#skills" },
  { link: "Contact", to: "#contact" }
];
const buttonItems = [
  { link: "About", to: "#about" },
  { link: "Code Sample", to: "#code" },
  { link: "Resumé", to: "#exp" },
  { link: "Skills", to: "#skills" },
  { link: "Contact", to: "#contact" }
];

const NavElements = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <NavUl>
        {linkItems.map((item) => (
          <NavLi key={item.link}>
            <NavLink href={item.to}>{item.link}</NavLink>
          </NavLi>
        ))}
      </NavUl>
      <Button
        type="button"
        background="#2bc8be"
        aria-controls="open-menu"
        aria-haspopup="true"
        onClick={handleClick}
        id="MenuButton"
        Nav
      >
        <MenuIcon fontSize="large" />
      </Button>
      <MenuModal
        id="open-menu"
        anchorEl={anchorEl}
        show={Boolean(anchorEl)}
        handleClose={handleClose}
      >
        {buttonItems.map((item) => (
          <MenuItem onClick={handleClose} key={item.link}>
            <MenuLink href={item.to}>{item.link}</MenuLink>
          </MenuItem>
        ))}
      </MenuModal>
    </>
  );
};

export default NavElements;
