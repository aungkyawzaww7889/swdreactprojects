import React from 'react'
import products from './Products'
import Container from './Container'
import Breadcrumbs from './Breadcrumbs'

const Cart = ({cart}) => {
  return (
         <div className='border border-black p-3'>
            <div className='grid grid-cols-6 items-center'>
            
                <div className='col-span-1'>
                    <img src={products[cart.id].image} className='w-12' alt="" />
                </div>
                <div className='col-span-3'>
                    <p className=''>{products[cart.id].title}</p>
                    <p className='text-gray-500'>Price <span className='font-bold'>$</span> {products[cart.id].price}</p>
                </div>
                <div className='col-span-1'>
                    <p className='mb-2'>Quantity</p>

                    <div className='flex items-center space-x-2'>
                        <button className='bg-black text-white px-2 py-0.2'>-</button>
                        <p >{cart.quantity}</p>
                        <button className='bg-black text-white px-2 py-0.2'>+</button>
                    </div>

                </div>
                <div className='col-span-1'>
                    <p className='font-bold text-2xl text-end'>$ {cart.cost}</p>
                </div>

            </div>
        </div>
  )
}

export default Cart
