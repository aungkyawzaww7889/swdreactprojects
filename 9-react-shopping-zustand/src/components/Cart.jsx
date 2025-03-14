import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Cart = ({ cart:{id,productId,quantity} }) => {

  const {products} = useProductStore();
  const {increaseQuantity,decreaseQuantity, removeCart} = useCartStore();

  const product = products.find(el => el.id === productId);

  const cost = product.price * quantity;

  const decreaseHandleClick = ()=>{

    if(quantity > 1){

      decreaseQuantity(id);

    }else{

      Swal.fire({
        title: "Are you sure to remove this items?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Item remove successfully");
        }
      });
    }
    
  }

  const increaseHandleClick = ()=>{
    increaseQuantity(id);
  }


  return (
    <div className=" border border-black p-5 grid grid-cols-6">
      <div className=" col-span-1">
        <img src={product.image} className=" h-16" alt="" />
      </div>
      <div className=" col-span-3">
        <p className=" mb-2">{product.title}</p>
        <p className=" text-gray-500">Price ({product.price})</p>
      </div>
      <div className=" col-span-1">
        <p className=" mb-2">Quantity</p>
        <div className=" flex gap-3">
          <button className=" bg-black text-white px-2 py-0.5" onClick={decreaseHandleClick}>-</button>
            {quantity}
          <button className=" bg-black text-white px-2 py-0.5" onClick={increaseHandleClick}>+</button>
        </div>
      </div>
      <div className=" col-span-1">
        <p className=" text-end text-2xl font-bold mt-3">{cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;