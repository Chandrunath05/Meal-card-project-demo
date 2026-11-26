import React, { useState } from 'react'
import useFetch from '../services/useFetch';
import Cards from '../Components/Common-ui/Common/Cards';

export const MealCard = () => {
 console.log("MealCard rendring")
   const [search, setSearch] = useState("");
  const { data } = useFetch("https://dummyjson.com/products");
  console.log(data.products);
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }
const searchFilter = data?.products?.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <div className='flex items-center justify-between px-6 py-1 bg-'>
        <p className='text-purple-500 font-medium text-lg tracking-tight pl-3'>Fresh Meal List</p>
        <input
          className='border border-red-100  rounded-2xl p-1 text-center bg-amber-50 outline-none'
          placeholder='Search here...'
          value={search}
          onChange={onSearchChange}
        />
      </div>
      
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {searchFilter?.map((product) => (
          <Cards
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.images}
          />
        ))}

      </div>
    </div>
  )
}
export default MealCard;