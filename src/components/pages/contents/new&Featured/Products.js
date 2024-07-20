import { products } from "./Product";
import ProductFilter from "./ProductFilter";

export default function Products() {
  return (
    <div>
      <ProductFilter />

      <div className=" grid grid-cols-2 gap-4 w-full">
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
