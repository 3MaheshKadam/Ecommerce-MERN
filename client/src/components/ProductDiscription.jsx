import React from 'react'

const ProductDiscription = () => {
  return (
    <div className='mt-20 max-padd-container'>
      <div className=" flex gap-3 mb-4">
        <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn-dark-outline rounded-sm !text-xs !py-[px] w-36'>Care Guide</button>
        <button className='btn-dark-outline rounded-sm !text-xs !py-[px] w-36'>Size Guide</button>
      </div>
      <div className="flex flex-col pb-16">
        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quae voluptatibus. Fugit laboriosam eius, possimus ipsam officiis sapiente expedita est consequatur accusamus consequuntur tempora eaque nesciunt repellat fugiat excepturi! Fuga?</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt nisi maxime accusamus et ipsum officia odit ipsa voluptates laborum.</p>
      </div>
    </div>
  )
}

export default ProductDiscription