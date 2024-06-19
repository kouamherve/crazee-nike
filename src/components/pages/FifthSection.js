import React from "react";
import HomeCard from "../reusable-ui/HomeCard";

export default function FifthSection() {
  return (
    <section className="mt-8 p-6">
      <h3 className=" text-4xl tracking-tighter font-Lilita font-medium uppercase">
        c-n membership
      </h3>
      <div className="flex py-6 gap-3 overflow-x-auto">
        <HomeCard
          className=" h-[375px] w-[300px]"
          detail="Member Product"
          title="Your Exclusive Access"
          image="https://cdn.pixabay.com/photo/2020/03/16/16/49/russian-4937606_1280.jpg"
        />
        <HomeCard
          className=" h-[375px] w-[300px]"
          detail="Sports & Wellness Apps"
          title="Movement Where You're At"
          image="https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_1280.jpg"
        />
        <HomeCard
          className=" h-[375px] w-[300px]"
          detail="Crazee-Nike By You"
          title="Your Customization Service"
          image="https://cdn.pixabay.com/photo/2021/06/13/21/02/street-style-6334382_1280.jpg"
        />
      </div>
    </section>
  );
}
