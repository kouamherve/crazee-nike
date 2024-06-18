import { useState } from "react";
import Navbar from "./navbar/Navbar";
import MenuContext from "../../context/MenuContext";
import AllMenu from "./navbar/AllMenu";
import HomeCard from "../reusable-ui/HomeCard";

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
              <button className=" my-5 px-4 py-2 bg-black text-white font-medium rounded-full border-2 border-black/60">
                Shop
              </button>
            </div>
          </section>
          <section>
            <HomeCard
              detail="Just Dropped"
              title="The Aura Bag"
              image="https://cdn.pixabay.com/photo/2016/08/30/14/10/bag-1630852_1280.jpg"
            />
            <HomeCard
              detail="New Arrivals"
              title="Air Jordan 4 'Oxydized Green'"
              image="https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619_1280.jpg"
            />
            <HomeCard
              detail="Don't Waste Your Energy"
              title="Run in Pegasus 41"
              image="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg"
            />
            <HomeCard
              detail="Look Good, Play Good"
              title="Prime Time Gear"
              image="https://cdn.pixabay.com/photo/2020/05/27/07/40/nike-5226090_1280.jpg"
            />
          </section>
        </div>
      </div>
    </MenuContext.Provider>
  );
}
