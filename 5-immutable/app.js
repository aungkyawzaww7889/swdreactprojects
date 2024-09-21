// const macBook = {
//     model : "MacBook Pro",
//     storage : "512GB",
//     price : 1000,

// };

// console.log(macBook);

// add 
// const obj = {...macBook, color:"gray"};


//update
// const obj = {...macBook, price:4000};


//remove
// const {storage,price, ...obj}  = macBook;
// const {storage, ...obj}  = macBook;


// console.log(macBook);
// console.log(obj);


const myPhones = [
    {   
        id : 1,
        model : "MacBook Pro",
        storage : "512GB",
        price : 1000
    },

    {   
        id : 2,
        model : "Iphone Pro",
        storage : "515GB",
        price : 1500
    },

    {   
        id : 3,
        model : "Oppo Pro",
        storage : "52GB",
        price : 1300
    }

];


// add  

const newproduct ={
    model : "Samsung Pro",
    storage : "5442GB",
    price : 4300
};


//add
// const arr = [...myPhones,newproduct];


//remove
// const arr = myPhones.filter((myPhone)=>myPhone.id !== 2);

//update
const arr = myPhones.map((myPhone)=> {
    if(myPhone.id === 2){
        return {...myPhone, storage: myPhone.storage+50};
    }
    return myPhone;
});


console.table(myPhones);
console.table(arr);

