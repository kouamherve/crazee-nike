import { Carousel } from "flowbite-react";

export default function CarouselFeatured() {
  return (
    <div className="h-[60px] w-full bg-zinc-100 text-[11px] font-semibold font-sans text-black/80 border border-b-backgroundHr">
      <Carousel
        indicators={false}
        pauseOnHover
        leftControl="&nbsp;"
        rightControl="&nbsp;"
      >
        <div className="flex h-full items-center justify-center underline">
          <span>Members: Free Shipping on Orders $50+</span>
        </div>
        <div className="flex h-full items-center justify-center underline ">
          <span>Gear Up Mid-Season: Use EXTRA25</span>
        </div>
        <div className="flex h-full items-center justify-center underline ">
          <span>Look For Store Pickup at Checkout</span>
        </div>
      </Carousel>
    </div>
  );
}
