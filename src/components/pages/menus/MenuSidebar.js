import AllMenuForm from "./AllMenuForm";
import AllMenuFooter from "./AllMenuFooter";
import { useContext, useState } from "react";
import AllMenuProduct from "./AllMenuProduct";
import MenuContext from "../../../context/MenuContext";
import ExtraProduct from "../../reusable-ui/ExtraProduct";
import MenuSidebarCard from "../../reusable-ui/MenuSidebarCard";

export default function MenuSidebar() {
  const [content, setContent] = useState("");
  const { isHidden } = useContext(MenuContext);
  if (isHidden)
    return <MenuSidebarCard isHome="other">{content}</MenuSidebarCard>;

  return (
    <MenuSidebarCard>
      <div>
        <AllMenuProduct />
        <div className="py-6 space-y-4">
          <ExtraProduct title="Jordan" />
          <ExtraProduct title="Converse" />
        </div>
        <AllMenuForm />
        <AllMenuFooter />
      </div>
    </MenuSidebarCard>
  );
}
