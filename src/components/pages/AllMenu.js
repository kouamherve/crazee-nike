import { IoMdClose } from "react-icons/io";
import { IoBagOutline, IoStorefrontOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { GiAlliedStar } from "react-icons/gi";
import { SiJordan } from "react-icons/si";
import { TfiHelpAlt } from "react-icons/tfi";
import { FiShoppingBag } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function AllMenu() {
  return (
    <div className=" absolute inset-0 bg-blue-300 ml-14 h-screen">
      <div>
        <IoMdClose />
      </div>
      <div>
        <ul>
          <li>
            <span>Running</span>
            <GrFormNext />
          </li>
          <li>
            <span>New & Featured</span>
            <GrFormNext />
          </li>
          <li>
            <span>Men</span>
            <GrFormNext />
          </li>
          <li>
            <span>Women</span>
            <GrFormNext />
          </li>
          <li>
            <span>Kids</span>
            <GrFormNext />
          </li>
          <li>
            <span>Jordan</span>
            <GrFormNext />
          </li>
        </ul>
      </div>
      <div>
        <div>
          <SiJordan />
          <span>Jordan</span>
        </div>
        <div>
          <GiAlliedStar />
          <span>Converse</span>
        </div>
      </div>
      <div>
        <div>
          <p>
            Become a Nike member for the best products, inspiration and stories
            in sport.
          </p>
          <Link to="">Learn more</Link>
        </div>
        <div>
          <button>Join Us</button>
          <button>Sign In</button>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <TfiHelpAlt />
            <span>Help</span>
          </li>
          <li>
            <IoBagOutline />
            <span>Bag</span>
          </li>
          <li>
            <FiShoppingBag />
            <span>Orders</span>
          </li>
          <li>
            <IoStorefrontOutline />
            <span>Stores</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
