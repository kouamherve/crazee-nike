import { Link, useParams } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { GoChevronLeft } from "react-icons/go";

export default function MenuPages() {
  const { menuId } = useParams();
  return (
    <div
      className={`${"absolute top-0 right-0 bg-white w-80 min-h-screen pr-6 pl-9"} `}
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

        <div>
          <VscClose className=" cursor-pointer" />
        </div>
      </div>
      {menuId}
    </div>
  );
}
