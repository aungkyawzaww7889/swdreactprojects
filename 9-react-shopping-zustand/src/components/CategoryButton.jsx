import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({ category:{id,name,isActive} }) => {

  const {activeCategories} = useCategoryStore();
  const handleClick = ()=>{
    activeCategories(id);
  }

  return (
    <button className={`${ isActive && "bg-black text-white"} border text-nowrap border-black px-4 py-2 me-2 category-button`} onClick={handleClick}>
      {name}
    </button>
  );
};

export default CategoryButton;