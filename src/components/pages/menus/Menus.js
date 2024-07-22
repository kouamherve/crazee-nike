import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FiUser, FiMenu } from "react-icons/fi";
import { useContext } from "react";
import MenuContext from "../../../context/MenuContext";

export default function Menus() {
  const { setIsOpen, ref, mainRef, setShowMenuItem } = useContext(MenuContext);

  const handleOpen = () => {
    ref.current = window.scrollY;
    const main = mainRef.current;

    main.style.position = "fixed";
    main.style.top = `-${ref.current}px`;
    main.style.width = "100%";

    setIsOpen(true);
    setShowMenuItem(false);
  };

  return (
    <div className="flex gap-4 text-dark">
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
