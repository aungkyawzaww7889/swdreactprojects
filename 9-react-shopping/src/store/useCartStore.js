import { create } from "zustand";

const useCartStore = create((set)=>({
    carts : [
        {
           id : 1,
           productId: 1,
           quantity : 1,
        },
        {
           id : 2,
           productId: 3,
           quantity : 3,
        }
            
    ],
    increaseQuantity: (id) => set((state)=>({
        carts: state.carts.map((el)=>el.id === id ? {...el,quantity:el.quantity + 1} :el),
    })),
    decreaseQuantity: (id) => set((state)=>({
        carts: state.carts.map((el)=>el.id === id ? {...el,quantity:el.quantity - 1} :el),
    })),
    removeCart : (id) => set((state)=>({
        carts: state.carts.filter((el)=>(el.id !== id))
    })),
}));

export default useCartStore;

// 46min 