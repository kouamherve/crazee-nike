import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { VscClose } from "react-icons/vsc";
import MenuContext from "../../../context/MenuContext";

export default function MenuItems() {
  const { showMenuItem, setShowMenuItem, isOpen, content } =
    useContext(MenuContext);

  const handleMenuItemClose = () => {
    setShowMenuItem(false);
  };

  return (
    <>
      {showMenuItem && isOpen && (
        <div
          className={`absolute font-Montserrat bg-dark text-white top-0 right-0 bottom-0 border-l 
         border-dark shadow-sm w-80 px-6 z-50 h-screen overflow-y-auto`}
        >
          <div
            className={`text-3xl py-6 w-full flex items-center justify-between`}
          >
            <div onClick={handleMenuItemClose}>
              <Link className="flex items-center gap-2 -translate-x-4">
                <GoChevronLeft className=" text-2xl cursor-pointer" />
                <span className=" text-lg font-medium">All</span>
              </Link>
            </div>
            <div>
              <VscClose className=" cursor-pointer" />
            </div>
          </div>

          <div className=" pt-10">{content} </div>
        </div>
      )}
    </>
  );
}
