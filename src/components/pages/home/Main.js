import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import UsefulLinks from "./UsefulLinks";
import Footer from "./Footer";
import Navbar from "../navbar/Navbar";
import { useContext } from "react";
import MenuContext from "../../../context/MenuContext";

export default function Main() {
  const { isActiveMenu } = useContext(MenuContext);

  return (
    <div className=" relative font-Montserrat">
      <div className={`${isActiveMenu ? "fixed w-full" : ""}`}>
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
