import Button from "../../reusable-ui/Button";

export default function SecondSection() {
  return (
    <div className="  bg-dark">
      <div className="px-9 py-16 text-center text-white">
        <h1 className=" text-[40px] pb-2 tracking-tighter font-Lilita font-medium uppercase">
          Win on air
        </h1>
        <p className=" p-2 font-medium">
          Meet the next generation of Crazee-Nike Air. Engineered to the exact
          specifications of championship athletes.
        </p>
        <div className=" space-x-2 pt-4 text-dark ">
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
            src="https://cdn.pixabay.com/photo/2020/07/19/05/31/nike-5418992_1280.jpg"
            alt=""
          />
        </div>
        <div className="flex w-full h-[300px]">
          <div className=" w-full h-full">
            <img
              className=" w-full h-full object-cover object-center"
              src="https://cdn.pixabay.com/photo/2015/05/06/21/55/soccer-755825_1280.jpg"
              alt=""
            />
          </div>
          <div className=" w-full h-full">
            <img
              className=" w-full h-full object-cover object-center"
              src="https://cdn.pixabay.com/photo/2017/06/07/11/33/football-2380100_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
