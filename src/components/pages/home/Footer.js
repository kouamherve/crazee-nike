import { RxChevronDown } from "react-icons/rx";
import { PiCopyright } from "react-icons/pi";
import SubFooter1 from "./SubFooter1";

export default function Footer() {
  return (
    <div className="px-6 py-12">
      <div>
        <SubFooter1 />

        <div>
          <hr className=" pb-6" />
          <ul className="text-sm text-secondary font-medium space-y-3">
            <li className="flex items-center gap-1">
              <PiCopyright />
              <h4>2024 Crazee-Nike, Inc. All Rights Reserved</h4>
            </li>
            <li className="flex gap-1">
              <h4>Guide</h4>
              <RxChevronDown className=" text-xl" />
            </li>
            <li>Terms Of Sale</li>
            <li>Terms Of Use</li>
            <li>Crazee-Nike Privacy Policy</li>
            <li className="flex gap-1">
              <img
                className=" size-[22px]"
                src="./assets/privacy_choices.png"
                alt="privacy choices"
              />
              <h4>Your Privacy Choices</h4>
            </li>
            <li>CA Supply Chains Act</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
