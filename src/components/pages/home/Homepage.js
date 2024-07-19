/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
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

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

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
    showNavbar,
    setShowNavbar,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <MenuSidebar />
      <MenuItems />
      <Navbar showNavbar={showNavbar} />
      <Main />
    </MenuContext.Provider>
  );
}
