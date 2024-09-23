// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProductCard from './ProductCard'
import Container from './Container';
// import products from './Products';
import useProuctStore from '../store/useProductStore';
import useCategoryStore from '../store/useCategoryStore';

const ProductSection = () => {

  const { products } = useProuctStore();
  const {categories} = useCategoryStore();

  const currentCategories = categories.find(el=>el.isActive === true);

  return (

   <section className='px-5 pb-5'>
     <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-5'>
        {
            products.filter(el => currentCategories.name === "All" || el.category === currentCategories.name).map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
      </div>

    </Container>
   </section>
  )
}

export default ProductSection
