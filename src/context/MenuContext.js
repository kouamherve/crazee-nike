import { createContext } from "react";

export default createContext({
  isOpen: false,
  setIsOpen: () => {},
  isHidden: false,
  setIsHidden: () => {},
  ref: () => {},
  mainRef: () => {},
  position: 0,
  setPosition: () => {},
  showMenuItem: false,
  setShowMenuItem: () => {},
  content: "",
  setContent: () => {},
  handleClose: () => {},
});
