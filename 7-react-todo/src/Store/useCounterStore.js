import {create} from 'zustand';

// const useCounterStore = create(function(set){
//     return{
//         count:3,
//         resetCount: function(){
//             return set({
//                 count: 0
//             })
//         },
//         incrementCount: function(){
//             return set(function(state){
//                 return {
//                     count: state.count + 1
//                 }
//             })
//         },
//         decrementCount: function(){
//             return set(function(state){
//                 return {
//                     count: state.count -1
//                 }
//             })   
//         }
//     }
// });


const useCounterStore = create((set)=>({
    count:5,
    resetCount: ()=> set({count:0}),
    incrementCount: ()=> set((increase)=>({count:increase.count+1})),
    decrementCount: ()=> set((decrease)=>({count:decrease.count-1})),
}));

export default useCounterStore;