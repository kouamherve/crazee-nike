import { RxChevronRight } from "react-icons/rx";
import ExtraProduct from "../../reusable-ui/ExtraProduct";
import AllMenuForm from "./AllMenuForm";
import AllMenuFooter from "./AllMenuFooter";
import { allMenus } from "./helpers";
import NavbarMenu from "../../reusable-ui/NavbarMenu";

export default function AllMenu() {
  return (
    <NavbarMenu isHome="homepage">
      <div>
        <div className="mt-4 py-6">
          <ul className=" text-2xl space-y-3">
            {allMenus.map((menu) => (
              <li key={menu.id} className="flex items-center justify-between">
                <h3 className=" font-medium capitalize">{menu.title}</h3>
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
    </NavbarMenu>
  );
}
