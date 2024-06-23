import Logo from "./Logo";
import Menus from "./menus/Menus";

export default function Navbar() {
  return (
    <nav
      className={` w-full fixed z-50 font-Montserrat bg-white transition-transform duration-300 overflow-x-hidden`}
    >
      <div className="flex items-center justify-between px-6 py-5 shadow">
        <Logo />
        <Menus />
      </div>
      {/* <AllMenu /> */}
    </nav>
  );
}
