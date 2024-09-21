import React from 'react'

const CategoryButton = ({categoryName,current}) => {
    // console.log(mycategories);

    return (
      
        <button className={`${current ? "bg-slate-900 text-white":"" } border border-black hover:bg-slate-900 hover:text-white cursor-pointer text-nowrap px-4 py-2 me-2`}>{categoryName}</button>
      
    )
}

export default CategoryButton
