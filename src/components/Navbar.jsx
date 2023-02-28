import React, { useState } from "react";
import logo from "../assets/images/logo-white.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="absolute top-0 z-10 w-full">
      <div className="flex justify-between items-center w-full px-6 xl:px-12 pt-8">
        <img src={logo} alt="SunnySide Agency Logo" className="h-6" />
        <img
          src={hamburgerIcon}
          alt="Menu Toggle Icon"
          className="lg:hidden"
          onClick={() => setToggleNavbar((prev) => !prev)}
        />
        <div className="hidden text-white text-xl lg:flex items-center gap-8">
          <p className="">About</p>
          <p className="">Services</p>
          <p className="">Projects</p>
          <button className="uppercase text-black font-fraunces hover:bg-opacity-50 bg-white rounded-full w-fit mx-auto px-6 py-4">
            Contact
          </button>
        </div>
      </div>
      <div
        className={`${
          !toggleNavbar && "h-0 pt-0 pb-0 py-0 opacity-50"
        } transition-all md:hidden py-8 overflow-hidden duration-500 text-center grid grid-rows-4 mt-8 text-lg font-barlow bg-white mx-6 text-neutral-dark-grayish-blue`}
      >
        <p className="">About</p>
        <p className="">Services</p>
        <p className="">Projects</p>
        <button className="uppercase text-black font-fraunces bg-primary-yellow rounded-full w-fit mx-auto px-6 py-4">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
