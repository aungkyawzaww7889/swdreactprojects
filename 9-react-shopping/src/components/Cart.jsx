import React from 'react'
// import products from './Products'
import Container from './Container'
import Breadcrumbs from './Breadcrumbs'
import useProuctStore from '../store/useProductStore'
import useCartStore from '../store/useCartStore'

const Cart = ({cart:{id,productId,quantity}}) => {

    const {products} = useProuctStore();
    const product = products.find((el)=>el.id === productId);
    const cost = product.price * quantity;
    // console.log(cost);

    // console.log(product);
    // producters.map((producter)=>(
    //     // console.log(producter.id === productId)
    // ))

    const {increaseQuantity,decreaseQuantity,removeCart} = useCartStore();

    const increaseHandler = ()=>{
        increaseQuantity(id);
    }


    const decreaseHandler = ()=>{
        if(quantity > 1){
            decreaseQuantity(id);
        }else{
            confirm("Are your sure to delete My Cart ?") && removeCart(id);
        }
    }

  return (
         <div className='border border-black p-3'>
            <div className='grid grid-cols-6 items-center'>
            
                <div className='col-span-1'>
                    <img src={product.image} className='md:w-24' alt="" />
                </div>
                <div className='col-span-3'>
                    <p className='text-sm md:text-xl'>{product.title}</p>
                    <p className='text-gray-500'>Price <span className='font-bold'>$</span> {product.price}</p>
                </div>
                <div className='col-span-1 ms-2'>
                    <p className='mb-2 text-sm md:text-lg    font-bold'>Quantity</p>

                    <div className='flex items-center space-x-2'>
                        <button onClick={decreaseHandler} className='bg-black text-white text-sm md:text-xl px-2 py-0.2'>-</button>
                        <p className='font-bold'>{quantity}</p>
                        <button onClick={increaseHandler} className='bg-black text-white text-sm md:text-xl px-2 py-0.2'>+</button>
                    </div>

                </div>
                <div className='col-span-1'>
                    <p className='font-bold md:text-2xl text-lg text-end'>{cost.toFixed(2)}</p>
                </div>

            </div>
        </div>
  )
}

export default Cart
