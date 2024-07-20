import Logo from "./Logo";
import Menus from "../menus/Menus";

export default function Navbar({ showNavbar }) {
  return (
    <div className=" relative bg-white">
      <nav
        className={`fixed top-0 w-full transition-transform duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        } z-30 h-14 font-Montserrat overflow-x-hidden bg-white shadow-sm`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Logo />
          <Menus />
        </div>
      </nav>
    </div>
  );
}
