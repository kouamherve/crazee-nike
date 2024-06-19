import React from "react";

export default function Button({ className, children }) {
  return (
    <button
      className={`${className} px-3.5 py-1.5 font-medium rounded-full border-2`}
    >
      {children}
    </button>
  );
}
