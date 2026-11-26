import React from 'react'
import mealImage from "../../../assets/images/meal_image.png"
export const Topbar = () => {
  return (
    <div className=' w-full flex justify-between items-center px-4 h-13 bg-amber-500 shadow-black-700'>
      <div>
        <p className='font-bold text-yellow-300'>Dashboard</p>
      </div>
      <div className='flex gap-2 items-center justify-center mr-4'>
        <input 
        className='border-0 outline-none pl-3 border-red-100 rounded-2xl   bg-amber-50 h-8' 
        placeholder='search here..' 
        />
        <img src={mealImage} alt='Logo' className='h-8 w-12'/>
      </div>
    </div>
  )
}
export default Topbar;