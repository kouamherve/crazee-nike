import React from "react";

export default function ClassicsCard({ name, image }) {
  return (
    <div className="relative py-5 h-80 w-[300px] mx-auto shrink-0">
      <img
        className="w-full h-full object-cover object-center"
        src={image}
        alt="Air Jordan"
      />
      <h3 className="absolute inset-0 pt-5 flex justify-center text-white text-xl font-medium">
        {name}
      </h3>
    </div>
  );
}
