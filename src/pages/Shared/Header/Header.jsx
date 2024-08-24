import React from "react";

export default function Header() {
  return (
    <nav className="bg-[#d81033] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">LOGO</div>
        {/* Menu Links */}
        <div className=" flex space-x-8">
          <a href="" className="text-white font-medium transition duration-300">
            REWARDS
          </a>
          <a href="" className="text-white font-medium transition duration-300">
            ABOUT
          </a>
          <a href="" className="text-white font-medium transition duration-300">
            HOW IT WORKS
          </a>
          <a href="" className="text-white font-medium transition duration-300">
            HELP
          </a>
        </div>
      </div>
    </nav>
  );
}
