import { VscClose } from "react-icons/vsc";
import { IoBagOutline, IoStorefrontOutline } from "react-icons/io5";
import { RxChevronRight } from "react-icons/rx";
import { GiAlliedStar } from "react-icons/gi";
import { SiJordan } from "react-icons/si";
import { TfiHelpAlt } from "react-icons/tfi";
import { FiShoppingBag } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function AllMenu({ isShow, setIsShow }) {
  return (
    <div
      className={`${
        isShow
          ? "absolute top-0 right-0 bg-white w-80 min-h-screen pr-6 pl-9"
          : "hidden"
      } `}
    >
      <div className="text-3xl py-5 w-full flex items-center justify-end">
        <VscClose
          onClick={() => setIsShow(false)}
          className=" cursor-pointer"
        />
      </div>
      <div className="mt-4 py-6">
        <ul className=" text-2xl space-y-3">
          <li className="flex items-center justify-between">
            <h3 className=" font-medium">Running</h3>
            <RxChevronRight />
          </li>
          <li className="flex items-center justify-between">
            <h3 className=" font-medium">New & Featured</h3>
            <RxChevronRight />
          </li>
          <li className="flex items-center justify-between">
            <h3 className=" font-medium">Men</h3>
            <RxChevronRight />
          </li>
          <li className="flex items-center justify-between">
            <h3 className=" font-medium">Women</h3>
            <RxChevronRight />
          </li>
          <li className="flex items-center justify-between">
            <h3 className=" font-medium">Kids</h3>
            <RxChevronRight />
          </li>
          <li className="flex items-center justify-between">
            <h3 className=" font-medium">Jordan</h3>
            <RxChevronRight />
          </li>
        </ul>
      </div>
      <div className="py-6 space-y-4">
        <div className="flex items-center gap-2">
          <SiJordan className=" text-2xl" />
          <span className=" text-base font-medium">Jordan</span>
        </div>
        <div className="flex items-center gap-2">
          <GiAlliedStar className=" text-2xl" />
          <span className=" text-base font-medium">Converse</span>
        </div>
      </div>
      <div className=" py-12">
        <div>
          <p className=" text-xl text-secondary font-medium">
            Become a C-N member for the best products, inspiration and stories
            in sport.{" "}
            <span className=" text-black">
              <Link to="">Learn more</Link>
            </span>
          </p>
        </div>
        <div className=" py-6 font-medium text-[15px] space-x-2">
          <button className=" px-4 py-2 bg-black text-white rounded-full border-2 border-black/60">
            Join Us
          </button>
          <button className=" px-4 py-2 bg-white text-black rounded-full border-2 border-secondary/60">
            Sign In
          </button>
        </div>
      </div>{" "}
      <div className=" pt-6 pb-40">
        <ul className=" space-y-6">
          <li className="flex items-center gap-3">
            <TfiHelpAlt className=" text-2xl" />
            <span className=" text-base font-medium">Help</span>
          </li>
          <li className="flex items-center gap-3">
            <IoBagOutline className=" text-2xl" />
            <span className=" text-base font-medium">Bag</span>
          </li>
          <li className="flex items-center gap-3">
            <FiShoppingBag className=" text-2xl" />
            <span className=" text-base font-medium">Orders</span>
          </li>
          <li className="flex items-center gap-3">
            <IoStorefrontOutline className=" text-2xl" />
            <span className=" text-base font-medium">Find a store</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
