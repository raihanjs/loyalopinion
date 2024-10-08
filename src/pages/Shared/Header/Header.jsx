import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = (
    <>
      <Link
        onClick={() => {
          setToggleMenu(false);
        }}
        to="/rewards"
        className="text-md md:text-lg font-medium transition duration-300 hover:bg-slate-50 md:hover:bg-[#d81033] py-2 px-5 md:p-0"
      >
        REWARDS
      </Link>
      <Link
        onClick={() => {
          setToggleMenu(false);
        }}
        to="/about"
        className="text-md md:text-lg font-medium transition duration-300 hover:bg-slate-50 md:hover:bg-[#d81033] py-2 px-5 md:p-0"
      >
        ABOUT
      </Link>
      <Link
        onClick={() => {
          setToggleMenu(false);
        }}
        to="how-it-works"
        className="text-md md:text-lg font-medium transition duration-300 hover:bg-slate-50 md:hover:bg-[#d81033] py-2 px-5 md:p-0"
      >
        HOW IT WORKS
      </Link>
      <Link
        onClick={() => {
          setToggleMenu(false);
        }}
        to="/survey"
        className="text-md md:text-lg font-medium transition duration-300 hover:bg-slate-50 md:hover:bg-[#d81033] py-2 px-5 md:p-0"
      >
        TAKE SURVEY
      </Link>
    </>
  );

  return (
    <nav className="bg-[#d81033] shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4 px-2 md:px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-white">
            Loyal Opinion
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 md:gap-8 text-white">
          {menuItems}
        </div>
        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <FaBars
            className="text-white cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
        </div>
      </div>
      {/* Mobile Menu Links */}
      {toggleMenu && (
        <div className="fixed top-0 left-0 bg-white h-screen w-[80%] transition duration-900 md:hidden">
          <div className="text-[#d81033] flex flex-col">{menuItems}</div>
        </div>
      )}
    </nav>
  );
}
