import { create } from "zustand";


const useAppStore = create((set)=>{
    return{
        namechange : false,
        setnamechange : ()=>{
            set((state)=>({
                namechange : !state.namechange //true
            }))
        }
    }
})


export default useAppStore;