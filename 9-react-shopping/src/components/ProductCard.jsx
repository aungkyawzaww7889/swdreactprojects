// eslint-disable-next-line no-unused-vars
import React from 'react'
import Rating from './Rating'
import { useNavigate } from 'react-router-dom'
import useCartStore from '../store/useCartStore'
import toast from 'react-hot-toast'

const ProductCard = ({product:{id,title,price,image,rating:{rate},slug}}) => {

  // console.log(carts);

  const {carts,addCart} = useCartStore();
  const navigate = useNavigate();
  
  const handelAddCartBtn = (event)=>{
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity:1
    };
    addCart(newCart);
  }

  const handelOpenDetail = ()=>{
    navigate(`/productdetail/${slug}`)
  }

  const handelAdded = (event)=>{
    event.stopPropagation();
    toast.error("Item is already in My Cart ");
  }
  
  return (
    <div onClick={handelOpenDetail}>
        <div className='border border-black p-3 flex flex-col items-start gap-5'>
          <img src={image} className='h-36 md:h-40' alt="" />
          <p className='font-bold line-clamp-2'>{title}</p>
          <Rating rate={rate}/>
          <div className='w-full flex justify-between items-end'>
              <p>{price} $</p>
              {
                carts.find((cart)=>cart.productId === id) ? 
                (<button onClick={handelAdded} className={` border border-black bg-black text-white cursor-pointer px-4 py-2 me-2`}>Added</button>)
                 : 
                (<button onClick={handelAddCartBtn} className={` border border-black cursor-pointer hover:bg-slate-900 hover:text-white px-4 py-2 me-2`}>Add Cart</button>)
              }
              
          </div>
        </div>
    </div>
  )
}

export default ProductCard
