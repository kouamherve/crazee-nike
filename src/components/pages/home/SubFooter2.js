import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { PiCopyright } from "react-icons/pi";
import { styles } from "./helpers";
import { useEffect, useRef, useState } from "react";

export default function SubFooter2() {
  const [showGuideMenu, setShowGuideMenu] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = () => {
      setShowGuideMenu(false);
    };
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative">
      <hr className=" border-backgroundHr border-[0.5px]" />
      <ul className="pt-10 text-[13px] text-secondary font-medium space-y-4">
        <li className="flex items-center gap-1">
          <PiCopyright />
          <h4>2024 Crazee-Nike, Inc. All Rights Reserved</h4>
        </li>
        {showGuideMenu && (
          <div
            ref={ref}
            className=" absolute -top-[415px] h-fit w-fit bg-white border-[0.5px] border-secondary px-4 py-5 rounded-lg shadow-md"
          >
            <ul className=" text-[13px] text-secondary font-medium space-y-3">
              {styles.map((style) => (
                <li>{style.detail}</li>
              ))}
            </ul>
          </div>
        )}
        <li>
          <div
            onClick={() => setShowGuideMenu(!showGuideMenu)}
            className="flex gap-1.5 w-fit"
          >
            <h4>Guide</h4>
            <div className=" text-xl">
              {showGuideMenu ? <RxChevronUp /> : <RxChevronDown />}
            </div>
          </div>
        </li>
        <li>Terms Of Sale</li>
        <li>Terms Of Use</li>
        <li>Crazee-Nike Privacy Policy</li>
        <li className="flex items-center gap-2">
          <img
            className=" size-[24px] object-contain"
            src="./assets/privacy_choices.png"
            alt="privacy choices"
          />
          <h4>Your Privacy Choices</h4>
        </li>
        <li>CA Supply Chains Act</li>
      </ul>
    </div>
  );
}
