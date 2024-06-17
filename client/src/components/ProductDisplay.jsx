import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa6';

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <section className='max-padd-container flex flex-col gap-8 xl:flex-row '>
            <div className=" flex gap-x-2 xl:flex-1 py-5 bg-primary">
                <div className=" flex flex-col gap-[7px] flex-wrap">
                    <img src={product.image} alt="" className='max-h-[84px] rounded-lg bg-gray-10' />
                    <img src={product.image} alt="" className='max-h-[84px] rounded-lg bg-gray-10' />
                    <img src={product.image} alt="" className='max-h-[84px] rounded-lg bg-gray-10' />
                    <img src={product.image} alt="" className='max-h-[84px] rounded-lg bg-gray-10' />
                </div>
                <div className="max-h-[355px] w-auto flex">
                    <img src={product.image} alt="" className='rounded-xl bg-gray-10' />
                </div>
            </div>
            {/* right side */}
            <div className="flex-col flex xl:flex-[1.5] bg-white py-2 px-6 rounded-xl">

                <h3 className='h3 xm:line-clamp-1'>{product.name}</h3>
                <div className="flex item-start gap-x-2 medium-16">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <p>{233}</p>
                </div>
                <div className="flex items-baseline gap-x-6 bold-28 sm:bold-32 mt-4">
                    <div className="">${product.new_price}.00</div>
                    <div className="bold-20 sm:bold-28 line-through text-secondary">${product.old_price}.00</div>
                </div>

                
                
                <div className="">
                    {/* product color and icon */}
                    <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6">
                        <div className="">
                            <h4 className='bold-16'>Select Color:</h4>
                            <div className="flex gap-3 my-3">
                                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
                                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryYellow"></div>
                                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryBlue"></div>
                                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
                            </div>
                        </div>
                        <div className="">
                            <h4 className='bold-16'>Select Size:</h4>
                            <div className="flex gap-3 my-3">
                                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">S</div>
                                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">M</div>
                                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">L</div>
                                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">XL</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-8 max-w-[555px]">
                        <button className='btn-dark rounded-md'>add to cart</button>
                        <button className='btn-secondary rounded-md !py4'><FaHeart/></button>
                    </div>
                    <p><span className='medium-16 text-tertiary'>Category:</span>Women | Jacket | Winter</p>
                    <p><span className='medium-16 text-tertiary'>Tags :</span>Modern | New Arrival | Winter</p>
                </div>
            </div>
        </section>
    );
}

export default ProductDisplay;
