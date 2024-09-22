import React from 'react'
import { Link, useParams } from 'react-router-dom';
// import products from '../components/Products';
import Container from '../components/Container';
import Rating from '../components/Rating';
import Breadcrumbs from '../components/Breadcrumbs';
import useProuctStore from '../store/useProductStore';
import useCartStore from '../store/useCartStore';
import toast from 'react-hot-toast';


const Productdetail = () => {
  
  const {productid} = useParams();
  const {products} = useProuctStore();

  // console.log(productid);

  // const currentProduct = products.find((product) => product === productid);
  // console.log(productid);

  const currentProduct = products[productid-1];
  // console.log(currentProduct.id);

  const {carts,addCart} = useCartStore();

  const handelAddCartBtn = (event)=>{
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity:1
    };
    addCart(newCart);
  }

  const handelAdded = (event)=>{
    event.stopPropagation();
    toast.error("Item is already in My Cart ");
  }
  
  return (
    <Container className="px-10">
          <Breadcrumbs currentpage={"Product detail"}></Breadcrumbs>
          <div className='border border-black mb-5 px-5'>

            <div className='grid grid-cols-1 md:grid-cols-2 py-6 '>

              <div className=''>
                  <img src={currentProduct.image} className='h-[300px] md:h-[400px] md:w-1/2 block md:mx-auto' alt="" />
              </div>

              <div className='col-span-1 flex flex-col items-start gap-5 p-5'>
                <p className='text-xl md:text-3xl font-bold'>{currentProduct.title}</p>
                <p className='bg-gray-300 text-gray-500 px-3 py-1'>{currentProduct.category}</p>
                <p className='text-justify'>{currentProduct.description}</p>

                <Rating rate={currentProduct.rating.rate}/>

               <div className='flex justify-between items-center w-full'>
                  <p>Price {currentProduct.price}$</p>
                  {/* <button className={`border border-black hover:bg-slate-900 hover:text-white cursor-pointer px-4 py-2`}>Add Cart</button> */}
                  {
                    carts.find((cart)=>cart.productId === currentProduct.id) ? 
                    (<button onClick={handelAdded} className={` border border-black bg-black text-white cursor-pointer px-4 py-2 me-2`}>Added</button>)
                    : 
                    (<button onClick={handelAddCartBtn} className={` border border-black cursor-pointer hover:bg-slate-900 hover:text-white px-4 py-2 me-2`}>Add Cart</button>)
                  }
               </div>
              </div>

          </div>
          </div>

    </Container>

  )
}

export default Productdetail
