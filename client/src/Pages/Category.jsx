import React from 'react'
import { VscSettings} from 'react-icons/vsc'
import all_products from '../assets/all_products.js'
import Item from '../components/Item.jsx'
import { Link } from 'react-router-dom'

const Category = ({banner , category}) => {
  return (
    <section className='bg-primary'>
      <div className="max-padd-container pt-6">
        <div className="">
          <img src={banner} alt="" className=' block mb-7 mx-auto' />
        </div>
        <div className="flexBetween my-10 mx-2">
          <h5><span className='font-bold'>Showing 1-12</span> out of 36 products</h5>
          <Link to={'/'}
          className='text-3xl bg-tertiary rounded-md h-10 w-10 p-2 text-white'><VscSettings/></Link>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
          {all_products.map((item)=>{
            if(category === item.category){
              return <Item key={item.id} id={item.id} name={item.name} 
              image={item.image} new_price={item.new_price} 
              old_price={item.old_price}/>
            }
          })}
        </div>
        <div className="py-16 text-center">
          <button className='btn-dark rounded-xl'>Load More</button>
        </div>
      </div>
    </section> 
  )
}

export default Category