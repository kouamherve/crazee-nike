import Button from "../../reusable-ui/Button";

export default function SecondSection() {
  return (
    <div className=" bg-dark">
      <div className="px-6 py-20 text-center text-white">
        <h1 className=" text-[40px] pb-2 tracking-tighter font-Lilita font-medium uppercase">
          Win on air
        </h1>
        <p className="px-2 font-medium">
          Meet the next generation of Crazee-Nike Air. Engineered to the exact
          specifications of championship athletes.
        </p>
        <div className=" space-x-2 pt-6 text-dark ">
          <Button className=" bg-white border border-white">
            Experience Air
          </Button>
          <Button className="  bg-white border border-white">Shop Air</Button>
        </div>
      </div>
      <div>
        <div className="w-full h-[450px]">
          <img
            className=" w-full h-full object-cover object-center"
            src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_493,c_limit/a3babaed-553e-4f7e-a3fd-422df398ae29/nike-just-do-it.jpg"
            alt=""
          />
        </div>
        <div className="flex w-full h-[300px]">
          <img
            className=" w-full h-full object-cover object-center"
            src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_411,c_limit/e5d0ee1a-bc86-4242-895f-abc809f16a05/nike-just-do-it.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
