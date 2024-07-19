import Navbar from "../../navbar/Navbar";
import Footer from "../../home/Footer";
import { useEffect, useState } from "react";
import { useNavbarVisibility } from "../../../../hooks/useNavbarVisibility";

import Main from "./Main";
import CarouselFeatured from "./CarouselFeatured";

export default function NewAndFeatured() {
  const [isAtTop, setIsAtTop] = useState(false);

  const showNavbar = useNavbarVisibility();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 150) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-Montserrat">
      <Navbar showNavbar={showNavbar} />

      <div className=" bg-white pt-14"></div>

      <CarouselFeatured />

      <Main showNavbar={showNavbar} isAtTop={isAtTop} />

      <Footer />
    </div>
  );
}
