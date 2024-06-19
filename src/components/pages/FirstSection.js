import Button from "../reusable-ui/Button";

export default function FirstSection() {
  return (
    <section>
      <div className=" h-[505px] w-full">
        <img
          className=" h-full w-full object-cover object-center"
          src="https://cdn.pixabay.com/photo/2020/07/19/05/31/nike-5418992_1280.jpg"
          alt=""
        />
      </div>
      <div className=" px-9 pt-4 pb-12 text-center">
        <h1 className=" text-4xl py-2 tracking-tighter font-Lilita font-bold uppercase">
          producer pack
        </h1>
        <p className=" p-2 font-medium">
          The Alchemist, Bink! and Metro Boomin highlight the natural connection
          between Hoop and Hip Hop with their own custom versions of the KD17.
        </p>
        <Button className="bg-black border-black/60 text-white">Shop</Button>
      </div>
    </section>
  );
}
