import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuContext from "../../../../context/MenuContext";
import { GoChevronLeft } from "react-icons/go";
import { VscClose } from "react-icons/vsc";

export default function MenuItems() {
  const { showMenuItem, setShowMenuItem, isOpen } = useContext(MenuContext);

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
            <Link>
              <div
                onClick={handleMenuItemClose}
                className="flex items-center gap-2 -translate-x-4"
              >
                <GoChevronLeft className=" text-2xl cursor-pointer" />
                <span className=" text-lg font-medium">All</span>
              </div>
            </Link>
            <div>
              <VscClose className=" cursor-pointer" />
            </div>
          </div>
          <h1>Menu Items</h1>
        </div>
      )}
    </>
  );
}
