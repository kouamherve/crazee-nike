import { VscClose } from "react-icons/vsc";
import { RxChevronRight } from "react-icons/rx";
import ExtraProduct from "../../reusable-ui/ExtraProduct";
import AllMenuForm from "./AllMenuForm";
import AllMenuFooter from "./AllMenuFooter";
import { allMenus } from "./utils";

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
          {allMenus.map((menu) => (
            <li key={menu.id} className="flex items-center justify-between">
              <h3 className=" font-medium">{menu.title}</h3>
              <RxChevronRight />
            </li>
          ))}
        </ul>
      </div>
      <div className="py-6 space-y-4">
        <ExtraProduct title="Jordan" />
        <ExtraProduct title="Converse" />
      </div>
      <AllMenuForm />
      <AllMenuFooter />
    </div>
  );
}
