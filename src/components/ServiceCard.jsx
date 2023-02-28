import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="relative">
      <img src={props.imgSrc} alt="Serivce Images" className="md:hidden" />
      <img src={props.deskImgSrc} alt="Service Images" className="hidden md:block " />
      <div className={` ${props.title==='Photography' ? 'text/-primary-blue-photographic-text' : 'text-primary-desaturated-cyan-design-text'} text-center absolute bottom-16 z-10 left-1/2 -translate-x-1/2`}>
        <h1 className="font-fraunces font-extrabold text-3xl mb-8">{props.title}</h1>
        <p className="font-barlow font-bold max-w-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
