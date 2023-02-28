import React from "react";
import ImageTransform from "../assets/images/mobile/image-transform.jpg";
import ImageStandOut from "../assets/images/mobile/image-stand-out.jpg";
import ImageGraphicDesign from "../assets/images/mobile/image-graphic-design.jpg";
import ImagePhotography from "../assets/images/mobile/image-photography.jpg";

import ImageTransformDesktop from "../assets/images/desktop/image-transform.jpg";
import ImageStandOutDesktop from "../assets/images/desktop/image-stand-out.jpg";
import ImageGraphicDesignDesktop from "../assets/images/desktop/image-graphic-design.jpg";
import ImagePhotographyDesktop from "../assets/images/desktop/image-photography.jpg";
import MarketingCard from "./MarketingCard";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const marketingStrategies = [
    {
      id: 1,
      title: "Transform your brand",
      desc: "We are a full-service creeative agency specializing in heloing brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      imgSrc: ImageTransform,
      deskImgSrc: ImageTransformDesktop
    },
    {
      id: 2,
      title: "Stand out to the right audience",
      desc: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
      imgSrc: ImageStandOut,
      deskImgSrc: ImageStandOutDesktop
    },
  ];

  const services = [
    {
      id: 1,
      title: "Graphic Design",
      desc: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention",
      imgSrc: ImageGraphicDesign,
      deskImgSrc: ImageGraphicDesignDesktop
    },
    {
      id: 2,
      title: "Photography",
      desc: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      imgSrc: ImagePhotography,
      deskImgSrc: ImagePhotographyDesktop
    },
  ];

  const marketingRender = marketingStrategies.map((marketing) => (
    <MarketingCard key={marketing.id} {...marketing} />
  ));
  const serviceRender = services.map((service) => (
    <ServiceCard key={service.id} {...service} />
  ));

  return (
    <div className="">
      <div className="">{marketingRender}</div>
      <div className="md:grid md:grid-cols-2">{serviceRender}</div>
    </div>
  );
};

export default Services;
