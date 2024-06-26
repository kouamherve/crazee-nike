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
      <div>
        <FooterCard title="resources" resources={resource} className=" py-5" />
        <FooterCard title="help" resources={help} className=" py-0" />
        <FooterCard title="company" resources={company} className="py-0" />
        <FooterCard
          title="promotions & discounts"
          resources={promotion}
          className="py-0"
        />
      </div>
      <div>
        <hr />
        <div className=" py-6 flex items-center gap-2">
          <TfiWorld className=" text-2xl text-secondary" />
          <h3 className=" text-base font-medium">United States</h3>
        </div>
      </div>
    </>
  );
}
