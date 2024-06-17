import { useState } from "react";
import Navbar from "./navbar/Navbar";
import MenuContext from "../../context/MenuContext";
import AllMenu from "./navbar/AllMenu";

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
      <div className=" relative">
        <div className={`${isActiveMenu ? "bg-secondary fixed w-full" : ""}`}>
          <Navbar />
        </div>
      </div>
    </MenuContext.Provider>
  );
}
