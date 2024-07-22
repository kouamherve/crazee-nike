import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Footer from "./Footer";
import { useContext } from "react";
import MenuContext from "../../../context/MenuContext";

export default function Main() {
  const { isOpen, mainRef } = useContext(MenuContext);

  return (
    <div
      id="mainContent"
      ref={mainRef}
      className={`font-Montserrat bg-white ${
        isOpen ? " overflow-hidden" : ""
      } `}
    >
      <div className=" pt-14"></div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}
