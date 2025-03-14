import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router";
import useCartStore from "../store/useCartStore";
// import carts from "../data/carts";
import toast, { Toaster } from 'react-hot-toast';



const ProductCard = ({product: { id, title,price,slug, image,rating: { rate },}}) => {

  const {carts,addCart} = useCartStore();

  const navigate = useNavigate();


  const handleAddedCart = (event) =>{
    event.stopPropagation(); 
    toast.error('Item is already in My Cart');
  }

  const handleAddCartBtn = (event) =>{
    event.stopPropagation(); 
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1
    }

    addCart(newCart);
    toast.success("Item added to My Cart");
  } 

  const handleOpenDetail = () =>{
    navigate(`/product-detail/${slug}`)
  }

  return (
    <div className=" border border-black p-5 flex flex-col items-start gap-5" onClick={handleOpenDetail}>
      <img src={image} className=" h-40" alt="" />
      <p className=" font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className=" flex justify-between items-end w-full ">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button className=" text-sm border border-black bg-black text-white px-3 py-1" onClick={handleAddedCart}>
            Added
          </button>
        ) : (
          <button className=" text-sm border border-black px-3 py-1" onClick={handleAddCartBtn}>
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;