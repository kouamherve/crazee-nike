import { useState } from "react";
import Main from "./Main";
import MenuContext from "../../../context/MenuContext";
import Navbar from "../navbar/Navbar";
import MenuSidebar from "../navbar/menus/MenuSidebar";

export default function Homepage() {
  // States
  const [isShow, setIsShow] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isMenuPageShow, setIsMenuPageShow] = useState(false);

  // Contexts
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
      <MenuSidebar />
      <Navbar />
      <Main />
    </MenuContext.Provider>
  );
}
