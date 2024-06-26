import { TfiHelpAlt } from "react-icons/tfi";
import { FiShoppingBag } from "react-icons/fi";
import { IoBagOutline, IoStorefrontOutline } from "react-icons/io5";

export default function AllMenuFooter() {
  return (
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
  );
}
