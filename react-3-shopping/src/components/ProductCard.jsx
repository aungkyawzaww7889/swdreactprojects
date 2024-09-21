// eslint-disable-next-line no-unused-vars
import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import carts from './Cartdata'

const ProductCard = ({product:{id,title,price,image,rating:{rate}}}) => {

  console.log(carts);
  
  return (
    <Link to={`/productdetail/${id}`}>
        <div className='border border-black p-3 flex flex-col items-start gap-5'>
          <img src={image} className='h-36 md:h-40' alt="" />
          <p className='font-bold line-clamp-2'>{title}</p>
          <Rating rate={rate}/>
          <div className='w-full flex justify-between items-end'>
              <p>{price} $</p>

              {
                // carts
              }
              {/* <button className={` border border-black hover:bg-slate-900 hover:text-white cursor-pointer px-4 py-2 me-2`}>Add Cart</button> */}
          </div>
        </div>
    </Link>
  )
}

export default ProductCard
