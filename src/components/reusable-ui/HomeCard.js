import React from "react";
import Button from "./Button";

export default function HomeCard({ detail, title, image }) {
  return (
    <div className="relative">
      <div className="h-[500px]">
        <img
          className=" h-full w-full object-cover object-center brightness-[0.80]"
          src={image}
          alt=""
        />
      </div>
      <div className=" absolute bottom-0 p-6">
        <div className=" text-white font-medium">
          <h3>{detail}</h3>
          <h2 className=" text-xl py-1">{title}</h2>
        </div>
        <Button className=" my-4 bg-white  border-white/60">Shop</Button>
      </div>
    </div>
  );
}
