import { useRef, useState } from "react";
import Main from "./Main";
import MenuContext from "../../../context/MenuContext";
import Navbar from "../navbar/Navbar";
import MenuSidebar from "../navbar/menus/MenuSidebar";
import MenuItems from "../navbar/menus/MenuItems";

export default function Homepage() {
  const [isHidden, setIsHidden] = useState(false);
  const [showMenuItem, setShowMenuItem] = useState(false);
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
    showMenuItem,
    setShowMenuItem,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MenuSidebar />
      <MenuItems />
      <Navbar />
      <Main />
    </MenuContext.Provider>
  );
}
