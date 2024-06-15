import React from 'react'
import {Link} from 'react-router-dom';
import RelatedProduct from './RelatedProduct.jsx';
const Hero = () => {
  return (
    <section>
        <div className=" bg-hero bg-cover bg-no-repeat h-[744px] w-full">
            <div className="relative top-2 xs:top-32 max-padd-container">
            <h4 className='uppercase medium-18 tracking-wider'>Trendy Treasuers</h4>
            <h2 className='h1 capitalize max-w-[40rem]'>Treat Yourself with <span className='text-secondary'>Something Special </span>and Find What Makes You Smile!</h2>
            <p className='my-5 max-w-[33rem]'>Welcome to Kadam's Ecommerce, your destination for fashion and style. 
             Enjoy a seamless shopping experience on our easy-to-navigate website.</p>
            <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
                <div className="text-center regular-14 leading-tight pl-5">
                    <h5 className='uppercase font-bold'>25% Off</h5>
                    <p className='regular-14'>on Every Item</p>
                </div>
                <Link to={''}className='btn-dark rounded-xl flexCenter !py-5'>Shop now</Link>
            </div>
            <div className="mt-5">
                <RelatedProduct/> 
            </div>
            </div>
        </div>
    </section>

)
}

export default Hero