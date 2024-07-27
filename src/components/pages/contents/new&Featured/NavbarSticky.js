import React from "react";

export default function NavbarSticky({ showNavbar, isAtTop }) {
  return (
    <div
      className={`sticky ${
        showNavbar ? "top-14" : "top-0"
      } flex items-center p-5 bg-white font-semibold z-30 `}
    >
      <h3 className={`${isAtTop ? "text-[14px] " : "text-lg"}`}>New</h3>
    </div>
  );
}
