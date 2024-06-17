import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FiUser, FiMenu } from "react-icons/fi";
import { useContext } from "react";
import MenuContext from "../../../context/MenuContext";

export default function Menus() {
  const { setIsShow, isActiveMenu, setIsActiveMenu } = useContext(MenuContext);
  const handleClic = () => {
    setIsShow(true);
    setIsActiveMenu(true);
  };

  return (
    <div className="flex gap-4 text-gray-800">
      <div className=" text-[22px]">
        <IoSearchOutline />
      </div>
      <div className=" text-[22px]">
        <FiUser />
      </div>
      <div className=" text-[22px]">
        <IoBagOutline />
      </div>
      <div onClick={handleClic} className=" text-[25px]">
        <FiMenu className={`${isActiveMenu ? "hidden" : "cursor-pointer"}`} />
      </div>
    </div>
  );
}
