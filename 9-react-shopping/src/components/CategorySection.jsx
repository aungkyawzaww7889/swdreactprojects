// eslint-disable-next-line no-unused-vars
import React from 'react'
import CategoryButton from './CategoryButton';
import Container from './Container';
import useCategoryStore from '../store/useCategoryStore';

const CategorySection = () => {


    const title = "Product Categories";
    // const categories =[
    //     "electronics",
    //     "jewelery",
    //     "men's clothing",
    //     "women's clothing"
    // ];
    const {categories} = useCategoryStore();

    return (
        <section>
            <Container>
                <div className="p-5">
                    <h1 className="text-lg text-gray-500 mb-3">{title}</h1>
                    <div className='flex overflow-scroll scrollbarhide'>

                        {/* <CategoryButton categoryName={"All"} current={true}/> */}
                    {
                        categories.map((category)=>(
                            <CategoryButton key={category.id} category = {category}/>
                        ))
                    }


                        {/* <CategoryButton name = "aung" current= {true} />
                        <CategoryButton name = "Kyaw" current= {false} />
                        <CategoryButton name = "Zaww" current= {false} />
                        <CategoryButton name = "Lwin" current= {false} />
                        <CategoryButton name = "Phoo" current= {false} /> */}


                    </div>
                </div>
            </Container>
        </section>
    )

}

export default CategorySection
