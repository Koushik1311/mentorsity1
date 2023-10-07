"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Import icons from Heroicons

const TopBanner = () => {
  // Set the title of Top Banner
  const [title, setTitle] = useState(
    "Mumbai Event: Hacking Gen AI & Data Science Jobs"
  );

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${
        isActive
          ? "hidden"
          : "p-2 flex justify-center items-center gap-9 bg-yellow-500/10 border-b-2 border-yellow-500"
      }`}
    >
      {/* Top Banner Tittle  */}
      <h1 className="font-lato text-yellow-950/80 text-md font-bold">
        {title}
      </h1>

      {/* Register Button */}
      <button className="uppercase font-lato font-bold text-sm bg-yellow-500 text-gray-900 px-3 py-1.5 rounded-md hover:bg-yellow-300 transition-all">
        Register Now
      </button>

      {/* Close icon */}
      <XMarkIcon
        className="w-6 h-6 text-gray-950/30 hover:text-gray-950 transition-all ml-16 cursor-pointer"
        onClick={toggleClass}
      />
    </div>
  );
};

export default TopBanner;
