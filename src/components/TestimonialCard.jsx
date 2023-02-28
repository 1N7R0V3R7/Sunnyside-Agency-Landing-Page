import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className="px-10">
      <img src={props.profileImg} alt={`${props.name} Profile Image`} className="rounded-full h-20 mx-auto mt-16 mb-8" />
      <p className="text-neutral-very-dark-grayish-blue font-barlow text-lg">
        {props.text}
      </p>
      <h3 className="text-neutral-desaturated-blue font-fraunces mt-8 mb-2 font-extrabold text-lg">
        {props.name}
      </h3>
      <p className="text-neutral-grayish-blue font-barlow text-sm">
        {props.designation}
      </p>
    </div>
  )
}

export default TestimonialCard