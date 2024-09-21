import React from 'react'
import useCategoryStore from '../store/useCategoryStore'

const CategoryButton = ({ category : {id,name,isActive} }) => {
    // console.log(mycategories);

    const {categories,activeCategory} = useCategoryStore();

    const handelClick = ()=>{
        // categories(id);
        // console.log('hay');
        activeCategory(id);
    }

    return (
      
        <button onClick={handelClick} className={`${isActive ? "bg-slate-900 text-white":"" } border border-black hover:bg-slate-900 hover:text-white cursor-pointer text-nowrap px-4 py-2 me-2`}>{name}</button>
      
    )
}

export default CategoryButton
