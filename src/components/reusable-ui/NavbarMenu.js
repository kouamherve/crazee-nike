import { VscClose } from "react-icons/vsc";
import { GoChevronLeft } from "react-icons/go";
import { useContext } from "react";
import MenuContext from "../../context/MenuContext";
import { Link } from "react-router-dom";

export default function NavbarMenu({ children, isHome }) {
  const { isOpen, setIsOpen, setIsHidden, ref } = useContext(MenuContext);

  const handleClose = () => {
    const mainContent = document.getElementById("mainContent");
    mainContent.style.position = "";
    mainContent.style.top = "";
    window.scrollTo(0, ref.current);

    setIsOpen(false);
    setIsHidden(false);
  };
  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 bg-blend-overlay z-40"></div>
          <div
            className={`absolute font-Montserrat bg-white top-0 right-0 bottom-0 border-l 
            shadow-sm rounded-md w-80 px-6 z-50 h-screen overflow-y-auto`}
          >
            <div
              className={`text-3xl py-6 w-full flex items-center ${
                isHome === "homepage" ? "justify-end" : "justify-between"
              }`}
            >
              {isHome !== "homepage" && (
                <Link>
                  <div className="flex items-center gap-2 -translate-x-4">
                    <GoChevronLeft className=" text-2xl" />
                    <span className=" text-lg font-medium">All</span>
                  </div>
                </Link>
              )}
              <div onClick={handleClose}>
                <VscClose className=" cursor-pointer" />
              </div>
            </div>
            {children}
          </div>
        </>
      )}
    </>
  );
}
