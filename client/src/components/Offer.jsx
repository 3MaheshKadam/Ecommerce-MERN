import React from 'react'
import {Link } from 'react-router-dom';
import {FaArrowRightLong} from 'react-icons/fa6'
const Offer = () => {
  return (
    <section className=' bg-banneroffer bg-center bg-cover w-full'>
      <div className=" max-padd-container px-4 py-16 md:py-24 lg:py-44">
        <h2 className='h2'>Summer Sale 50% off!</h2>
        <h3 className='medium-32 capitalize font-normal text-secondary'>Grab your Favourate Before </h3>
        <h3 className='medium-32 capitalize font-normal'> They're Gone!</h3>

        <Link to={''} className='text-white pl-6 bg-tertiary rounded-full flexBetween gap-x-2 medium-16 w-44 mt-10 group'>  
        Go to Shop
        <FaArrowRightLong className='text-xl bg-secondary text-primary rounded-full h-12 w-12 p-4 group:hover:-rotate-45 transition-all duration-500 border-2 border-white'/>
        </Link>
      </div>
    </section>
  )
}

export default Offer