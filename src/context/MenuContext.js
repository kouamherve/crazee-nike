import { createContext } from "react";

export default createContext({
  isShow: true,
  setIsShow: () => {},
  isMenuPageShow: false,
  setIsMenuPageShow: () => {},
  isHidden: false,
  setIsHidden: () => {},
  isActiveMenu: false,
  setIsActiveMenu: () => {},
});
