import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FiUser, FiMenu } from "react-icons/fi";
import AllMenu from "./pages/AllMenu";

export default function Navbar() {
  return (
    <nav className=" relative font-Roboto bg-primary">
      <div className="flex items-center justify-between px-6 py-5">
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
            <FiMenu />
          </div>
        </div>
      </div>
      <AllMenu />
    </nav>
  );
}
