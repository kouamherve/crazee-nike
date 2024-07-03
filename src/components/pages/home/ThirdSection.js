import Button from "../../reusable-ui/Button";

export default function ThirdSection() {
  return (
    <section className="pb-12 flex flex-col items-center justify-center">
      <div className=" text-center py-12 space-y-5">
        <h3 className=" text-4xl tracking-tighter font-Lilita font-medium uppercase">
          new this week
        </h3>
        <Button className=" bg-black border-black/60 text-white font-medium">
          Shop New Arrivals
        </Button>
      </div>
      <div className=" pt-1 h-[475px]"></div>
    </section>
  );
}
