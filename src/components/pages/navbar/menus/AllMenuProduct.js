import { useNavigate } from "react-router-dom";
import { allMenus } from "./helpers";
import { RxChevronRight } from "react-icons/rx";
import { useContext } from "react";
import MenuContext from "../../../../context/MenuContext";

export default function AllMenuProduct() {
  const { setShowMenuItem } = useContext(MenuContext);

  const handleMenuItems = () => {
    setShowMenuItem(true);
  };

  return (
    <div className="mt-4 py-6">
      <ul className=" text-[22px] space-y-3">
        {allMenus.map((menu) => (
          <li key={menu.id}>
            <div
              onClick={handleMenuItems}
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
