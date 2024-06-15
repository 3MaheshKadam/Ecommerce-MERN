import React from 'react'
import { Link } from 'react-router-dom'
import {RiShoppingCart2Line} from 'react-icons/ri'
const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <Link to={''}className='bg-white p-4 rounded-xl relative'>
      <div className='flexCenter'>
        <img src={image} alt={name} height={211} width={211} className='rounded-lg drop-shadow-xl absolute bottom-40 '/>
      </div>
      <div className="flex flex-col gap-y-3 pt-24">
        <h4 className='line-clamp-2 medium-16'>{name}</h4>
        {/* <p>Old Price: ${old_price}</p>
        <p>New Price: ${new_price}</p> */}
        <p>Lorem, Nobis eaque a eum vitae! Vero odio nemo ad minima.</p>
      <div className="flexBetween">
        <div className="flex gap-x-4 medium-16">
            <span >${new_price}.00</span>
            <span className='line-through text-secondary'>${old_price}.00</span>
        </div>
        <RiShoppingCart2Line className='p-2 h-10 w-10 hover:text-secondary'/>
      </div>
      </div>

    </Link>
  )
}

export default Item
