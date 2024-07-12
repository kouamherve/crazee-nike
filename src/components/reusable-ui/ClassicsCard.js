import React from "react";

export default function ClassicsCard({ name, image }) {
  return (
    <div className="relative mx-auto shrink-0 pt-6 pb-14">
      <div className="h-[323px] w-[300px]">
        <img
          className="w-full h-full object-cover object-center"
          src={image}
          alt="Air Jordan"
        />
      </div>
      <h4 className="absolute bottom-4 text-dark text-lg font-medium">
        {name}
      </h4>
    </div>
  );
}
