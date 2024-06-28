import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FiUser, FiMenu } from "react-icons/fi";
import { useContext } from "react";
import MenuContext from "../../../../context/MenuContext";

export default function Menus() {
  const { isShow, setIsShow, divRef, setPosition } = useContext(MenuContext);

  const handleClic = () => {
    if (!isShow) {
      const rect = divRef.current.getBoundingClientRect();
      setPosition({ top: rect.top, left: rect.left });
    }
    setIsShow(true);
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
        <FiMenu className=" cursor-pointer" />
      </div>
    </div>
  );
}
