import React from 'react'
import imageEmily from '../assets/images/image-emily.jpg'
import imageJennie from '../assets/images/image-jennie.jpg'
import imageThomas from '../assets/images/image-thomas.jpg'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {

  const testimonialDetails = [
    {
      id: 1,
      name: 'Emily R.',
      text: "We put out trust in Sunnyside and they delivered, makig sure our needs were met and deadlines were always hit.",
      designation: 'Marketing Director',
      profileImg: imageEmily,
    },
    {
      id: 2,
      name: 'Thomas S.',
      text: "Sunnyside's enuthsiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      designation: 'Cheif Operating Officer',
      profileImg: imageThomas,
    },
    {
      id: 3,
      name: 'Jennie F.',
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      designation: 'Business Owner',
      profileImg: imageJennie,
    }
  ]

  const renderTestimonials = testimonialDetails.map(testimonial => <TestimonialCard id={testimonial.id} {...testimonial} />)

  return (
    <div className="text-center my-16 lg:my-32 max-w-6xl lg:mx-auto">
      <h1 className="uppercase text-neutral-grayish-blue font-fraunces tracking-[0.2rem]">
        CLIENT TESTIMONIALS
      </h1>
      <div className="lg:grid lg:grid-cols-3">

      {renderTestimonials}
      </div>
    </div>
  )
}

export default Testimonials