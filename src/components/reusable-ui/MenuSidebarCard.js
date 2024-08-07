import { VscClose } from "react-icons/vsc";
import { useContext } from "react";
import MenuContext from "../../context/MenuContext";

export default function MenuSidebarCard({ children }) {
  const { isOpen, handleClose } = useContext(MenuContext);

  return (
    <>
      {isOpen && (
        <div>
          <div className="fixed inset-0 bg-black/50 bg-blend-overlay z-40"></div>
          <div
            className={`absolute font-Montserrat bg-white top-0 right-0 bottom-0 border-l 
             border-primary shadow-sm w-80 px-7 z-50 h-screen overflow-y-auto`}
          >
            <div
              className={`text-3xl py-6 w-full flex items-center justify-end`}
            >
              <div onClick={handleClose}>
                <VscClose className=" cursor-pointer" />
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
