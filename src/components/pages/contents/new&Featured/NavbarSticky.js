import React from "react";

export default function NavbarSticky({ showNavbar, isAtTop }) {
  return (
    <div
      className={`sticky ${
        showNavbar ? "top-14" : "top-0"
      } flex items-center p-5 bg-white font-medium z-30 `}
    >
      <h3 className={`${isAtTop ? "text-sm " : "text-lg"}`}>New Releases</h3>
    </div>
  );
}
