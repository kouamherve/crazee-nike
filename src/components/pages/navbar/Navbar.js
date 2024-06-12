import AllMenu from "./AllMenu";
import Logo from "./Logo";
import Menus from "./Menus";

export default function Navbar() {
  return (
    <nav className=" relative font-Montserrat bg-primary">
      <div className="flex items-center justify-between px-6 py-5 shadow">
        <Logo />
        <Menus />
      </div>
      <AllMenu />
    </nav>
  );
}
