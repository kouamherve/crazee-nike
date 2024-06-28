import { VscClose } from "react-icons/vsc";
import { GoChevronLeft } from "react-icons/go";
import { useContext } from "react";
import MenuContext from "../../context/MenuContext";
import { Link } from "react-router-dom";

export default function NavbarMenu({ children, isHome }) {
  const { isShow, setIsShow, setIsHidden } = useContext(MenuContext);

  const handleClose = () => {
    setIsShow(false);
    setIsHidden(false);
  };
  return (
    <div
      className={`${
        isShow
          ? "z-50 font-Montserrat absolute top-0 right-0 bg-white w-80 h-screen px-6 overflow-auto"
          : "hidden"
      } `}
    >
      <div
        className={`text-3xl py-5 w-full flex items-center ${
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
  );
}
