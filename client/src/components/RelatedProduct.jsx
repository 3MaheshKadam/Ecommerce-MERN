import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';
import LATEST from '../assets/latest.js';

const RelatedProduct = () => {
  return (
    <div className="">
      <h4 className='border-l-4 pl-2 border-secondary bold-20'>Related Products</h4>
      <div className="mx-auto max-w-full">
        <Swiper 
        breakpoints={{
            600:{
                slidesPerView:2,
                spaceBetween: 30,
            },
            1024:{
                slidesPerView:3,
                spaceBetween: 30,
            },1200:{
                slidesPerView:4,
                spaceBetween: 30,
            },
        }}
        //   spaceBetween={20}
        //   slidesPerView={4}
        //   navigation
        //   pagination={{ clickable: true }}
        //   loop
        className='h-[422px] sm:h-[477px] mt-5'
        >
          {LATEST.map((item, i) => (
            <SwiperSlide key={i}> 
              <Link to={''} className='flexCenter gap-x-5 bg-white  p-4 rounded-xl'>
                <img src={item.image} alt={item.name} height={77} width={77} className='rounded-lg drop-shadow-xl'/>
                <div className="flex flex-col gap-y-1">
                  <h4 className='line-clamp-1 medium-16'>{item.name}</h4>
                  <p className='line-clamp-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, dolore!</p>
                  <div className="flexBetween">
                     <div className="flexBetween gap-x-2 medium-16">
                      <span>${item.new_price}.00</span>
                      <span className='line-through text-secondary'>${item.old_price}.00</span>
                    </div>
                    <RiShoppingCart2Line className='text-xl hover:text-secondary' />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProduct;
