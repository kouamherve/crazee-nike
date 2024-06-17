import { useState } from "react";
import Navbar from "./navbar/Navbar";
import MenuContext from "../../context/MenuContext";

export default function Homepage() {
  // States
  const [isShow, setIsShow] = useState(false);
  const [isMenuPageShow, setIsMenuPageShow] = useState(false);

  const menuContextValue = {
    isShow,
    setIsShow,
    isMenuPageShow,
    setIsMenuPageShow,
  };

  // Handlers

  // Render
  return (
    <MenuContext.Provider value={menuContextValue}>
      <Navbar />
    </MenuContext.Provider>
  );
}
