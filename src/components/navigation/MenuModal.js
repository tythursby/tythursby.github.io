import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import "./MenuModal.css";
import { MenuCard } from "./style";

const ModalOverlay = (props) => {
  const { children } = props;
  const modalContent = <MenuCard>{children}</MenuCard>;
  return ReactDOM.createPortal(modalContent, document.getElementById("modal-hook"));
};

const MenuModal = (props) => {
  const { show, handleClose } = props;
  return (
    <>
      {show && <Backdrop onClick={handleClose} />}
      <CSSTransition in={show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default MenuModal;
