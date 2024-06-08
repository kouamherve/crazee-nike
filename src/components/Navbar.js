import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FiUser, FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between font-Roboto px-6 py-5 bg-primary shadow overflow-x-hidden">
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
    </nav>
  );
}
