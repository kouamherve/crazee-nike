import { IoFilter } from "react-icons/io5";
import Button from "../../../reusable-ui/Button";
import { products } from "./Product";

export default function ProductFilter() {
  return (
    <div className="px-5 py-4 flex items-center justify-between">
      <span className=" text-secondary text-[15px]">
        {products.length === 0 || products.length === 1
          ? `${products.length} Result`
          : `${products.length} Results`}
      </span>
      <Button className=" py-1 px-5 bg-white text-[15px] font-medium flex items-center justify-between gap-2 rounded-full border border-backgroundButtonFilter/60">
        <span>Filter</span>
        <IoFilter />
      </Button>
    </div>
  );
}
