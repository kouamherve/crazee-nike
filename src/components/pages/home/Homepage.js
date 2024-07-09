import { useRef, useState } from "react";
import Main from "./Main";
import MenuContext from "../../../context/MenuContext";
import Navbar from "../navbar/Navbar";
import MenuSidebar from "../menus/MenuSidebar";
import MenuItems from "../menus/MenuItems";

export default function Homepage() {
  const [isHidden, setIsHidden] = useState(false);
  const [showMenuItem, setShowMenuItem] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const [content, setContent] = useState("");

  const ref = useRef(0);

  const handleClose = () => {
    const mainContent = document.getElementById("mainContent");
    mainContent.style.position = "";
    mainContent.style.top = "";
    window.scrollTo(0, ref.current);
    setIsHidden(false);
    setIsOpen(false);
  };

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
    content,
    setContent,
    handleClose,
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
