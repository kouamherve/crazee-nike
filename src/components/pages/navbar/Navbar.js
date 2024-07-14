/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Menus from "../menus/Menus";

export default function Navbar() {
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

  return (
    <div className=" relative bg-white">
      <nav
        className={`fixed top-0 w-full transition-transform duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        } z-30 h-14 font-Montserrat overflow-x-hidden bg-white shadow-sm`}
      >
        <div className="flex items-center justify-between px-7 py-4">
          <Logo />
          <Menus />
        </div>
      </nav>
    </div>
  );
}
