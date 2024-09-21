// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProductCard from './ProductCard'
import Container from './Container';
import products from './Products';

const ProductSection = () => {

  return (

    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-5'>
        {
            products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
      </div>

    </Container>
  )
}

export default ProductSection
