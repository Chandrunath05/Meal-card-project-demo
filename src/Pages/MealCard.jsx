import React from 'react'
import useFetch from '../services/useFetch';
import Cards from '../Components/Common-ui/Common/Cards';

export const MealCard = () => {
  console.log('Meal cad rendered');
  const {data} = useFetch("https://dummyjson.com/products");
  console.log(data.products); 
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-x-3 gap-y-6 bg-slate-200 p-4'>
      <div>
        <p className='text-purple-500 font-medium text-lg tracking-tight'>Fresh Meal List</p>
      </div>
      {data.products?.map((product)=>(
        <Cards
          key = {product.id}
          title ={product.title}
          description = {product.description}
          image ={product.images}
        />
      ))}
    </div>
  )
}
export default MealCard;