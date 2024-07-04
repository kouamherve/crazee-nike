import Logo from "./Logo";
import Menus from "./menus/Menus";

export default function Navbar() {
  return (
    <div className=" relative">
      <nav
        className={` w-full fixed z-30 font-Montserrat bg-dark overflow-x-hidden`}
      >
        <div className="flex items-center justify-between px-6 py-5 shadow">
          <Logo />
          <Menus />
        </div>
      </nav>
    </div>
  );
}
