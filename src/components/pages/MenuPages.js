import { Link, useParams } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { GoChevronLeft } from "react-icons/go";
import { useContext } from "react";
import MenuContext from "../../context/MenuContext";

export default function MenuPages() {
  const { isMenuPageShow, setIsMenuPageShow } = useContext(MenuContext);

  const { menuId } = useParams();
  //console.log(menuId);

  return (
    <div
      className={`${
        isMenuPageShow
          ? "absolute top-0 right-0 bg-white w-80 min-h-screen pr-6 pl-9"
          : "hidden"
      } `}
    >
      <div
        className={`text-3xl py-5 w-full flex items-center justify-between
    `}
      >
        <Link>
          <div className="flex items-center gap-2 -translate-x-5">
            <GoChevronLeft className=" text-2xl" />
            <span className=" text-lg font-medium">All</span>
          </div>
        </Link>

        <div onClick={() => setIsMenuPageShow(false)}>
          <VscClose className=" cursor-pointer" />
        </div>
      </div>
      {menuId}
    </div>
  );
}
