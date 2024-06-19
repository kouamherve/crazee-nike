import ExtraProduct from "../../../reusable-ui/ExtraProduct";
import AllMenuForm from "./AllMenuForm";
import AllMenuFooter from "./AllMenuFooter";
import NavbarMenu from "../../../reusable-ui/NavbarMenu";
import { useContext, useState } from "react";
import MenuContext from "../../../../context/MenuContext";
import AllMenuProduct from "./AllMenuProduct";

export default function AllMenu() {
  const [content, setContent] = useState("");
  const { isHidden, setIsHidden } = useContext(MenuContext);
  if (isHidden) return <NavbarMenu isHome="other">{content}</NavbarMenu>;

  return (
    <NavbarMenu isHome="homepage">
      <div>
        <AllMenuProduct setContent={setContent} setIsHidden={setIsHidden} />
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
