import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Footer from "./Footer";
import { useContext } from "react";
import MenuContext from "../../../context/MenuContext";

export default function Main() {
  const { isOpen, ref } = useContext(MenuContext);

  return (
    <div
      id="mainContent"
      ref={ref}
      className={`font-Montserrat bg-white ${
        isOpen ? " overflow-hidden" : ""
      } `}
    >
      <div className=" pt-16"></div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}
