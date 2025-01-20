const macBook ={
    model :"Mac",
    storage: "21GB",
    price:1999
}

//add
// const obj = {...macBook,color:"gray"};

//remove
// const {storage,...obj} = macBook

//update
// const obj = { ...macBook,price:2000};

// console.log(macBook);
// console.log(obj);


// const fruits = ["apple","orange","banana"];

// add 
// const arr = [...fruits,"mango"];

//remove
// const arr = fruits.filter(el => el !== "apple");

//update
// const arr = fruits.map((el) => el === "apple" ? "mango" : el);

// console.log(fruits);
// console.log(arr);


const products = [
    {
        id:1,
        name:"Apple",
        price:2000,
        stock:25,
        rating:4.8
    },
    {
        id:2,
        name:"Orange",
        price:100,
        stock:25,
        rating:4.8
    },
    {
        id:3,
        name:"Banana",
        price:3000,
        stock:25,
        rating:4.8
    },
];

// add
// const newProduct = {
//     id:4,
//     name:"Mango",
//     price:2200,
//     stock:25,
//     rating:4.8
// }

// const arrs = [...products,newProduct];

//remove
// const arrs = products.filter(el => el.id !== 3);

//update
// const arrs = products.map((el)=>{
//     if(el.id === 3){
//         return {...el,stock: el.stock + 50};
//     }
//     return el;
// });

const arrs = products.map((el)=>{
    return {...el, stock: el.stock +100};
})

console.table(products);
console.table(arrs);