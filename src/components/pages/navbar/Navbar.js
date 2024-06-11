import AllMenu from "./AllMenu";
import { useState } from "react";
import Logo from "./Logo";
import Menus from "./Menus";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className=" relative font-Montserrat bg-primary">
      <div className="flex items-center justify-between px-6 py-5 shadow">
        <Logo />
        <Menus setIsShow={setIsShow} />
      </div>
      <AllMenu isShow={isShow} setIsShow={setIsShow} />
    </nav>
  );
}
