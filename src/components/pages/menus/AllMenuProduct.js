import { allMenus } from "./helpers";
import { RxChevronRight } from "react-icons/rx";
import { useContext } from "react";
import MenuContext from "../../../context/MenuContext";

export default function AllMenuProduct() {
  const { setShowMenuItem, setContent } = useContext(MenuContext);

  return (
    <div className="mt-4 py-6">
      <ul className=" text-[22px] space-y-3">
        {allMenus.map((menu) => (
          <li key={menu.id}>
            <div
              onClick={() => {
                setShowMenuItem(true);
                setContent(menu.content);
              }}
              className="flex items-center justify-between"
            >
              <h3 className=" font-medium capitalize">{menu.title}</h3>
              <RxChevronRight />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
