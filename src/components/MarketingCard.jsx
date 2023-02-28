import React from "react";

const MarketingCard = (props) => {
  return (
    <div className="md:grid md:grid-cols-2 items-stretch">
      <img src={props.imgSrc} alt="Service Image" className="md:hidden" />
      <img src={props.deskImgSrc} alt="" className={`hidden md:block ${props.id===1 && 'order-1'}`} />
      <div className="px-6 lg:p-20 xl:p-32 lg:my-auto text-center lg:text-left">
        <h1 className="text-neutral-desaturated-blue font-fraunces font-extrabold mb-6 mt-16 text-3xl">
          {props.title}
        </h1>
        <p className="font-barlow text-neutral-dark-grayish-blue">
          {props.desc}
        </p>
        <div className="uppercase font-fraunces font-extrabold text-sm w-fit mx-auto lg:mx-0 tracking-widest mt-6 mb-16 text-center">
          Learn More
          <div className={`${props.title==='Transform your brand' ? 'bg-primary-yellow' : 'bg-primary-red'} h-2 w-full relative -top-2 opacity-40 rounded-full`}></div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCard;
