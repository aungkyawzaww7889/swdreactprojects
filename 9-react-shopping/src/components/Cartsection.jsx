import React from 'react'
import Cart from './Cart'
// import products from './Products';
import Container from './Container';
import Breadcrumbs from './Breadcrumbs';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore';
import useProuctStore from '../store/useProductStore';
// import carts from './Cartdata';

const Cartsection = () => {

    const {carts} = useCartStore();
    const {products} = useProuctStore();

    const total = carts.reduce((pv,cv)=>{
        // const cost = pv;
       const cost = cv.quantity * products.find(({id})=> id===cv.productId ).price;
       return pv + cost;

    },0);

    const tax = total * 0.05;
    const nettotal = total + tax;

    // console.log(total);
   
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
                        <p className='font-bold text-xl md:text-2xl'>{total.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Tax</p>
                        <p className='font-bold text-xl md:text-2xl'>{tax.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Net Total</p>
                        <p className='font-bold text-xl md:text-2xl'>{nettotal.toFixed(2)}</p>
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
