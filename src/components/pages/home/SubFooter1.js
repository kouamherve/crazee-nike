import FooterCard from "../../reusable-ui/FooterCard";
import { companies, helps, promotions, resources } from "./helpers";
import { TfiWorld } from "react-icons/tfi";

export default function SubFooter1() {
  const resource = resources;
  const help = helps;
  const company = companies;
  const promotion = promotions;

  return (
    <>
      <div className=" pt-6">
        <FooterCard title="resources" resources={resource} className="py-0" />
        <FooterCard title="help" resources={help} className=" py-0" />
        <FooterCard title="company" resources={company} className="py-0" />
        <FooterCard
          title="promotions & discounts"
          resources={promotion}
          className="py-0"
        />
      </div>
      <div>
        <hr className="border-secondary border-[0.5px]" />
        <div className=" py-6 flex items-center gap-2 text-secondary">
          <TfiWorld className=" text-sm " />
          <h3 className=" text-sm font-medium ">United States</h3>
        </div>
      </div>
    </>
  );
}
