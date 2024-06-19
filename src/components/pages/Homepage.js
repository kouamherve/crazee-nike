import { useState } from "react";
import MenuContext from "../../context/MenuContext";
import AllMenu from "./navbar/menus/AllMenu";
import Main from "./Main";

export default function Homepage() {
  // States
  const [isShow, setIsShow] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isMenuPageShow, setIsMenuPageShow] = useState(false);

  const menuContextValue = {
    isShow,
    setIsShow,
    isMenuPageShow,
    setIsMenuPageShow,
    isHidden,
    setIsHidden,
    isActiveMenu,
    setIsActiveMenu,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <AllMenu />
      <Main />
    </MenuContext.Provider>
  );
}
