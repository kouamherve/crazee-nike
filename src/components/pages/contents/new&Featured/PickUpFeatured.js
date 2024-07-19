import React from "react";

export default function PickUpFeatured() {
  return (
    <div className="p-5 border-[0.5px] border-y-black flex items-center justify-between">
      <span className=" font-medium">Pick Up Today</span>
      <div className=" h-10 w-16 p-[2px] bg-paragraph_color/50 rounded-full flex items-center overflow-hidden shadow-sm">
        <span className=" size-9 rounded-full bg-white shadow-sm"></span>
      </div>
    </div>
  );
}
