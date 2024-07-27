import Navbar from "../../navbar/Navbar";
import Footer from "../../home/Footer";
import { useEffect, useState } from "react";
import { useNavbarVisibility } from "../../../../hooks/useNavbarVisibility";

import CarouselFeatured from "./CarouselFeatured";
import MainFeatured from "./MainFeatured";

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
    <div className="font-Montserrat w-full">
      <div className=" bg-white pt-[60px] w-full"></div>
      <Navbar showNavbar={showNavbar} />

      <CarouselFeatured />

      <MainFeatured showNavbar={showNavbar} isAtTop={isAtTop} />

      <Footer />
    </div>
  );
}
