import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FiUser, FiMenu } from "react-icons/fi";

export default function Menus({ setIsShow }) {
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
      <div className=" text-[25px]">
        <FiMenu onClick={() => setIsShow(true)} className=" cursor-pointer" />
      </div>
    </div>
  );
}
