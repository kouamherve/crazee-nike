import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FiUser, FiMenu } from "react-icons/fi";
import { useContext } from "react";
import MenuContext from "../../../context/MenuContext";

export default function Menus() {
  const { setIsOpen, ref, setShowMenuItem } = useContext(MenuContext);

  const handleOpen = () => {
    ref.current = window.scrollY;

    document.getElementById("mainContent").style.position = "fixed";
    document.getElementById("mainContent").style.top = `-${ref.current}px`;
    document.getElementById("mainContent").style.width = "100%";
    // document.body.style.overflow = "hidden";

    setIsOpen(true);
    setShowMenuItem(false);
  };

  return (
    <div className="flex gap-4 text-white">
      <div className=" text-[22px]">
        <IoSearchOutline />
      </div>
      <div className=" text-[22px]">
        <FiUser />
      </div>
      <div className=" text-[22px]">
        <IoBagOutline />
      </div>
      <div onClick={handleOpen} className=" text-[25px]">
        <FiMenu className=" cursor-pointer" />
      </div>
    </div>
  );
}
