import React from 'react'
import POPULAR from '../assets/popular.js'
import Item from './Item.jsx'

const PopularProudct = () => {
  return (
    <section className='bg-primary p-12 xl:py-28'>
      {/* title */}
      <div className='max-padd-container  text-center max-w-xl mx-auto'>
        <h3 className='h3'>Popular Products</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quo praesentium officiis corrupti excepturi blanditiis?</p>
      </div>
      {/* container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
        {POPULAR.map((item)=>(
          <Item key={item.id } id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProudct