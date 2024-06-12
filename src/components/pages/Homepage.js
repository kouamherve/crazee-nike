import { useState } from "react";
import Navbar from "./navbar/Navbar";
import MenuContext from "../../context/MenuContext";

export default function Homepage() {
  // States
  const [isShow, setIsShow] = useState(false);

  const menuContextValue = {
    isShow,
    setIsShow,
  };

  // Handlers

  // Render
  return (
    <MenuContext.Provider value={menuContextValue}>
      <Navbar />
    </MenuContext.Provider>
  );
}
