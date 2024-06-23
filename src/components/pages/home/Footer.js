import FooterCard from "../../reusable-ui/FooterCard";
import { companies, helps, promotions, resources } from "./helpers";
import { TfiWorld } from "react-icons/tfi";
import { RxChevronDown } from "react-icons/rx";
import { PiCopyright } from "react-icons/pi";

export default function Footer() {
  const resource = resources;
  const help = helps;
  const company = companies;
  const promotion = promotions;

  return (
    <div className="px-6 py-12">
      <div>
        <FooterCard title="resources" resources={resource} className=" py-5" />
        <FooterCard title="help" resources={help} className=" py-0" />
        <FooterCard title="company" resources={company} className="py-0" />
        <FooterCard
          title="promotions & discounts"
          resources={promotion}
          className="py-0"
        />
        <div>
          <hr />
          <div className=" py-6 flex items-center gap-2">
            <TfiWorld className=" text-2xl text-secondary" />
            <h3 className=" text-base font-medium">United States</h3>
          </div>
        </div>
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
