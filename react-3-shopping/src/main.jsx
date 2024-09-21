import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";


const root = document.querySelector("#root");
createRoot(root).render(<RouterProvider router={router} />);






// const categories =[
//     "electronics",
//     "jewelery",
//     "men's clothing",
//     "women's clothing"
//   ];


// categories.forEach(function(categorie){
//     console.log(categorie);
// })


//declearative
// const root = document.getElementById('root');

// console.log(root);

//view
// console.log(createElement('p',null,"Product Categories"));
// const app = createElement('div',{id:"category-section",className:"p-5"},createElement('p',{className:"text-2xl text-gray-500 mb-3"},"Product Categories"),
//     createElement("div",null,...categories.map((categorie)=>
//         createElement("button",{className:"border border-black px-4 py-2 me-2"},categorie)
//     )));


// view render 
// createRoot(root).render(App());
// createRoot(root).render(Othertest());



// const root = document.getElementById('root');
// const title = document.createElement('p');

// title.innerText = "Product Categories";
// title.classList.add('text-2xl','text-gray-400','mb-3');

// const categoryButton = (categoryName)=>{
//     const btn = document.createElement('button');
//     btn.textContent = "categoryName";
//     btn.classList.add("border","border-black","px-4","py-2","mx-2")
//     return btn;
// };

// root.append(title);

// categories.forEach((categorie)=>{
//     // console.log(categorie);

//     root.append(categoryButton(categorie));

// });


