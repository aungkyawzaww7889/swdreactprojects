import React from 'react'
// import products from './Products'
import Container from './Container'
import Breadcrumbs from './Breadcrumbs'
import useProuctStore from '../store/useProductStore'
import useCartStore from '../store/useCartStore'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'

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
            Swal.fire({
                title: "Are your sure cancel?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    removeCart(id);
                    toast.success("Item remove Successfully");
                }
              });
        }
    }

  return (
         <div className='border border-black px-5 py-3'>
            <div className='grid grid-cols-6 items-center space-x-4'>
            
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
                        <button onClick={decreaseHandler} className='bg-black text-white text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 hover:text-rose-500"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
                        </button>

                        <p className='font-bold'>{quantity}</p>
                        <button onClick={increaseHandler} className='bg-black text-white text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 hover:text-rose-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                        </button>
                    </div>

                </div>
                <div className='col-span-1'>
                    <p className='font-bold md:text-2xl text-sm ms-3 md:text-lg text-end'>${cost.toFixed(2)}</p>
                </div>

            </div>
        </div>
  )
}

export default Cart
