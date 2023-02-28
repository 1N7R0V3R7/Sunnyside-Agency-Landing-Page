import React from "react";
import imgGalleryCone from "../assets/images/mobile/image-gallery-cone.jpg";
import imgGalleryMilkBottle from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import imgGallerySugarCube from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import imgGalleryOrange from "../assets/images/mobile/image-gallery-orange.jpg";

// import imgGalleryConeDesktop from "../assets/images/desktop/image-gallery-cone.jpg";
// import imgGalleryMilkBottleDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
// import imgGallerySugarCubeDesktop from "../assets/images/desktop/image-gallery-sugar-cubes.jpg";
// import imgGalleryOrangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="font-barlow bg-primary-moderate-cyan-footer text-[#4C9080]">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <img src={imgGalleryMilkBottle} alt="Gallery Image 1" className="" />
        <img src={imgGalleryOrange} alt="Gallery Image 2" className="" />
        <img src={imgGalleryCone} alt="Gallery Image 3" className="" />
        <img src={imgGallerySugarCube} alt="Gallery Image 4" className="" />

        {/* <img src={imgGalleryMilkBottleDesktop} alt="Gallery Image 1" className="hidden md:block" />
        <img src={imgGalleryOrangeDesktop} alt="Gallery Image 2" className="hidden md:block" />
        <img src={imgGalleryConeDesktop} alt="Gallery Image 3" className="hidden md:block" />
        <img src={imgGallerySugarCubeDesktop} alt="Gallery Image 4" className="hidden md:block" /> */}
      </div>
      <div className="pb-20">
        <img
          src={logo}
          alt="Sunnyside Agency Logo"
          className="mx-auto mt-16 mb-12 h-8"
        />
        <div className="grid grid-cols-3 text-lg justify-center items-center text-center max-w-md lg:mx-auto">
          <p className="transition-colors duration-300 hover:text-white">About</p>
          <p className="transition-colors duration-300 hover:text-white">Services</p>
          <p className="transition-colors duration-300 hover:text-white">Projects</p>
        </div>
        <div className="grid grid-cols-4 mt-20 w-[60%] mx-auto justify-center items-center justify-items-center max-w-xs lg:mx-auto">
          <img src={facebook} alt="FaceBook Logo" className="transition-colors duration-300 hover:fill-white" />
          <img src={instagram} alt="InstaGram Logo" className="transition-colors duration-300 hover:fill-white" />
          <img src={twitter} alt="Twitter Logo" className="transition-colors duration-300 hover:fill-white" />
          <img src={pinterest} alt="Pinterest Logo" className="transition-colors duration-300 hover:fill-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
