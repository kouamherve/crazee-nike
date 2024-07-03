import { useRef, useState } from "react";
import Main from "./Main";
import MenuContext from "../../../context/MenuContext";
import Navbar from "../navbar/Navbar";
import MenuSidebar from "../navbar/menus/MenuSidebar";

export default function Homepage() {
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(0);

  const ref = useRef(0);

  const menuContextValue = {
    isOpen,
    setIsOpen,
    isHidden,
    setIsHidden,
    position,
    setPosition,
    ref,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MenuSidebar />
      <Navbar />
      <Main />
    </MenuContext.Provider>
  );
}
