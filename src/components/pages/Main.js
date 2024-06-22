import React, { useContext } from "react";
import Navbar from "./navbar/Navbar";
import MenuContext from "../../context/MenuContext";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import UsefulLinks from "./UsefulLinks";
import Footer from "./Footer";

export default function Main() {
  const { isActiveMenu } = useContext(MenuContext);

  return (
    <div className=" relative font-Montserrat">
      <div className={`${isActiveMenu ? "bg-secondary fixed w-full" : ""}`}>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <UsefulLinks />
        <Footer />
      </div>
    </div>
  );
}
