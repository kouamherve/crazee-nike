import Logo from "./Logo";
import Menus from "../menus/Menus";

export default function Navbar({ showNavbar }) {
  return (
    <div className=" relative bg-white ">
      <nav
        className={`${
          showNavbar ? " translate-y-0" : " -translate-y-full"
        } fixed top-0 w-full z-30 font-Montserrat overflow-x-hidden bg-white`}
      >
        <div className="flex items-center justify-between p-5">
          <Logo />
          <Menus />
        </div>
      </nav>
    </div>
  );
}
