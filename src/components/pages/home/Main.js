import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import UsefulLinks from "./UsefulLinks";
import Footer from "./Footer";
import { useContext } from "react";
import MenuContext from "../../../context/MenuContext";

export default function Main() {
  const { isShow, position, divRef } = useContext(MenuContext);

  return (
    <div
      ref={divRef}
      className={`font-Montserrat ${isShow ? "blur-sm fixed" : ""} `}
      style={{
        top: isShow ? `${position.top}px` : "auto",
        left: isShow ? `${position.left}px` : "auto",
        width: isShow ? "100%" : "auto",
        zIndex: isShow ? 30 : "auto",
      }}
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <UsefulLinks />
      <Footer />
    </div>
  );
}
