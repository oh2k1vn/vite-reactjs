import React from "react";
import "./style.css";

export default function Loader() {
  return (
    <div className="min-h-screen grid place-items-center ">
      <span className="loader-1 z-10"></span>
      <span className="absolute bg-black inset-0 opacity-25"></span>
    </div>
  );
}
