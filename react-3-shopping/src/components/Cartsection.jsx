import React from 'react'
import Cart from './Cart'
import products from './Products';
import Container from './Container';
import Breadcrumbs from './Breadcrumbs';
import { Link } from 'react-router-dom';
import carts from './Cartdata';

const Cartsection = () => {

   
  return (
    <Container>
        <div className='m-5 space-y-5'>
            <Breadcrumbs currentpage={"Cart"}></Breadcrumbs>
            {
                carts.map((cart)=>(
                    <Cart key={cart.id} cart={cart}/>
                ))
            }
        </div>

        <div className='m-5'>

            <div className='border-t border-black'>

               <div className=' flex justify-end gap-10 mt-4'>
                    <div className=''>
                        <p>Total($)</p>
                        <p className='font-bold text-lg'>{carts.price}</p>
                    </div>
                    <div>
                        <p>Tax(%)</p>
                        <p className='font-bold text-lg'>6.9</p>
                    </div>
                    <div>
                        <p>Tax(%)</p>
                        <p className='font-bold text-2xl'>74.9</p>
                    </div>
                                        
               </div>

            </div>
        

            <div className='text-end mb-4'>
                <Link><button className='border border-black hover:bg-slate-900 hover:text-white cursor-pointer px-4 py-2 mt-5 items-end'>Order Now</button></Link>
            </div>

        </div>

    </Container>
  )
}

export default Cartsection
