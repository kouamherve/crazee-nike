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
  const { isActiveMenu } = useContext(MenuContext);

  return (
    <div className={`${isActiveMenu ? "relative" : ""} font-Montserrat`}>
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
