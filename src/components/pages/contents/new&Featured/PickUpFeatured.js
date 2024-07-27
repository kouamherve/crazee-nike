import React from "react";

export default function PickUpFeatured() {
  return (
    <div className="px-5 py-4 border border-y-backgroundHr flex items-center justify-between">
      <span className=" text-[15px] font-medium">Pick Up Today</span>
      <div className=" h-10 w-[60px] p-[2px] bg-backgroundButtonFilter rounded-full flex items-center overflow-hidden shadow-sm">
        <span className=" size-9 rounded-full bg-white shadow-sm"></span>
      </div>
    </div>
  );
}
