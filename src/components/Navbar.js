import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FiUser, FiMenu } from "react-icons/fi";
import AllMenu from "./pages/AllMenu";
import { useState } from "react";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className=" relative font-Montserrat bg-primary">
      <div className="flex items-center justify-between px-6 py-5 shadow">
        <div>
          <h2 className=" uppercase font-extrabold text-lg text-black/85">
            crazee-nike
          </h2>
        </div>
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
            <FiMenu
              onClick={() => setIsShow(true)}
              className=" cursor-pointer"
            />
          </div>
        </div>
      </div>
      <AllMenu isShow={isShow} setIsShow={setIsShow} />
    </nav>
  );
}
