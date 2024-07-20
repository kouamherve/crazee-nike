import { IoFilter } from "react-icons/io5";
import Button from "../../../reusable-ui/Button";
import { products } from "./Product";

export default function ProductFilter() {
  return (
    <div className="px-5 py-4 flex items-center justify-between">
      <span className=" text-secondary">
        {products.length === 0 || products.length === 1
          ? `${products.length} Result`
          : `${products.length} Results`}
      </span>
      <Button className=" py-0 px-5 bg-white font-semibold flex items-center justify-between gap-2 rounded-full border border-secondary/50">
        <span>Filter</span>
        <IoFilter />
      </Button>
    </div>
  );
}
