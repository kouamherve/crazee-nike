import { createContext } from "react";

export default createContext({
  isOpen: false,
  setIsOpen: () => {},
  isHidden: false,
  setIsHidden: () => {},
  ref: () => {},
  position: 0,
  setPosition: () => {},
  showMenuItem: false,
  setShowMenuItem: () => {},
  content: "",
  setContent: () => {},
  handleClose: () => {},
  isVisible: false,
  setIsVisible: () => {},
});
