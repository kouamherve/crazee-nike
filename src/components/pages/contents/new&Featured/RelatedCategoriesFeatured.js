import RelatedCategoriesButton from "../../../reusable-ui/RelatedCategoriesButton";

export default function RelatedCategoriesFeatured() {
  return (
    <>
      <hr className=" border-backgroundHr border-[0.5px]" />
      <div className="pt-16 ">
        <h3 className=" text-lg font-medium px-3">Related Categories</h3>
        <div className="px-3 pt-5 pb-10 w-full text-xs font-semibold flex gap-2 text-nowrap overflow-x-auto no-scrollbar bg-white">
          <RelatedCategoriesButton buttonName="Best Selling Products" />
          <RelatedCategoriesButton buttonName="Best Shoes" />
          <RelatedCategoriesButton buttonName="New Basketball Shoes" />
          <RelatedCategoriesButton buttonName="New Soccer Shoes" />
          <RelatedCategoriesButton buttonName="New Men's Shoes" />
          <RelatedCategoriesButton buttonName="New Running Shoes" />
          <RelatedCategoriesButton buttonName="Best Men's Shoes" />
          <RelatedCategoriesButton buttonName="New Jordan Shoes" />
          <RelatedCategoriesButton buttonName="Best Women's Shoes" />
          <RelatedCategoriesButton buttonName="Best Training & Gym" />
        </div>
      </div>
    </>
  );
}
