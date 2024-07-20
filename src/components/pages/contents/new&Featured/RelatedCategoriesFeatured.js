import Button from "../../../reusable-ui/Button";

export default function RelatedCategoriesFeatured() {
  return (
    <>
      <hr className=" border-backgroundHr border-[0.5px]" />
      <div className="pt-20">
        <h3 className=" text-xl font-medium px-6">Related Categories</h3>
        <div className=" pt-6 pb-10 w-full text-xs font-semibold flex gap-2 text-nowrap overflow-x-auto no-scrollbar bg-white">
          <div className="flex h-full items-center justify-center">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Selling Products
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Basketball Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Soccer Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Men's Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Running Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Men's Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              New Jordan Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Women's Shoes
            </Button>
          </div>
          <div className="flex h-full items-center justify-center ">
            <Button className=" border-[0.5px] border-black font-semibold px-4">
              Best Training & Gym
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
