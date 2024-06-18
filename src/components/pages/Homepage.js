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
      <div className=" relative font-Montserrat">
        <div className={`${isActiveMenu ? "bg-secondary fixed w-full" : ""}`}>
          <div>
            <Navbar />
          </div>
          <section>
            <div className=" h-[505px] w-full">
              <img
                className=" h-full w-full object-cover object-center"
                src="https://cdn.pixabay.com/photo/2020/07/19/05/31/nike-5418992_1280.jpg"
                alt=""
              />
            </div>
            <div className=" px-9 pt-4 pb-12 text-center">
              <h1 className=" text-4xl py-2 tracking-tighter font-Lilita font-bold uppercase">
                producer pack
              </h1>
              <p className=" p-2 font-medium">
                The Alchemist, Bink! and Metro Boomin highlight the natural
                connection between Hoop and Hip Hop with their own custom
                versions of the KD17.
              </p>
              <button className=" my-5 px-4 py-2 bg-black text-white font-bold rounded-full border-2 border-black/60">
                Shop
              </button>
            </div>
          </section>
        </div>
      </div>
    </MenuContext.Provider>
  );
}
