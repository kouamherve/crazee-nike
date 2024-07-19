import React from "react";
import { products } from "./Product";
import { IoFilter } from "react-icons/io5";
import Button from "../../../reusable-ui/Button";

export default function Products() {
  return (
    <div>
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

      <div className=" grid grid-cols-2 gap-y-4 w-full">
        {products.map((product) => (
          <div key={product.id}>
            <div className=" bg-img size-48">
              <img
                className=" h-full w-full object-cover object-center"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
            <div className="px-3 py-2 text-[13px]">
              <span className=" text-pub font-semibold">
                {product.justIn ? "Just In" : ""}
              </span>
              <h4 className=" font-semibold">{product.title}</h4>
              <p>{product.category}</p>
              <div className="flex flex-col text-secondary">
                <span>
                  {product.colors === 0 || product.colors === 1
                    ? `${product.colors} Color`
                    : `${product.colors} Colors`}
                </span>
                <span className=" font-medium text-black text-base pt-2">
                  $ {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
