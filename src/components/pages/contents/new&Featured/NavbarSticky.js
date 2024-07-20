import React from "react";

export default function NavbarSticky({ showNavbar, isAtTop }) {
  return (
    <div
      className={` sticky ${
        showNavbar ? "top-14" : "top-0"
      } bg-white font-semibold h-14 flex items-center px-5 my-8 transition-all duration-300 ease-in `}
    >
      <h3
        className={`transition-all duration-300 ease-out ${
          isAtTop ? "text-xs " : "text-base"
        }`}
      >
        New Releases
      </h3>
    </div>
  );
}
