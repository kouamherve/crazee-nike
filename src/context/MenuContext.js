import { createContext } from "react";

export default createContext({
  isOpen: false,
  setIsOpen: () => {},
  isHidden: false,
  setIsHidden: () => {},
  ref: () => {},
  position: 0,
  setPosition: () => {},
});
