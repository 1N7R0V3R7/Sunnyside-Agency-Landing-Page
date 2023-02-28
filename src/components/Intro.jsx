import React from "react";
import imageHeader from "../assets/images/mobile/image-header.jpg";
import imageHeaderDesktop from "../assets/images/desktop/image-header.jpg";
import arrowDown from "../assets/images/icon-arrow-down.svg";

const Intro = () => {
  return (
    <div className="relative">
      <img src={imageHeader} alt="Intro Image" className="md:hidden" />
      <img
        src={imageHeaderDesktop}
        alt="Intro Image"
        className="hidden md:block"
      />
      <div className="flex flex-col gap-16 items-center absolute top-1/4 md:w-full">
        <p className="font-fraunces text-center uppercase text-white font-extrabold text-4xl lg:text-6xl tracking-[0.5rem]">
          WE ARE CREATIVES
        </p>
        <img src={arrowDown} alt="Arrow Down" className="" />
      </div>
    </div>
  );
};

export default Intro;
