import { useRef, useState } from "react";
import Main from "./Main";
import MenuContext from "../../../context/MenuContext";
import Navbar from "../navbar/Navbar";
import MenuSidebar from "../navbar/menus/MenuSidebar";

export default function Homepage() {
  // States
  const [isShow, setIsShow] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuPageShow, setIsMenuPageShow] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const divRef = useRef(null);

  // Contexts
  const menuContextValue = {
    isShow,
    setIsShow,
    isMenuPageShow,
    setIsMenuPageShow,
    isHidden,
    setIsHidden,
    position,
    setPosition,
    divRef,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MenuSidebar />
      <Navbar />
      <Main />
    </MenuContext.Provider>
  );
}
