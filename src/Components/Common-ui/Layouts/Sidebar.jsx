import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import DashboardLayouts from './DashboardLayouts';
import { LayoutDashboard } from 'lucide-react';
import { UtensilsCrossed } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import mealImage from "../../../assets/images/meal_image.png"
export const Sidebar = () => {
  const navLinks = [
    {name:'Dashboard', icon:LayoutDashboard, path:"/"},
    {name:'Meal Card', icon:UtensilsCrossed, path:"/mealCard"},
    {name:'Meal Create', icon:CirclePlus, path:"/meals/create"}
  ]
  const styleNavLinks = "p-2 w-full flex items-center gap-3 rounded-md mb-4";

  return (
    <div className='w-50 bg-amber-300 flex flex-col gap-5 h-full '>
      <div className='flex h-13 justify-center items-center border-b-2 px-2 py-2'>
        <img src={mealImage} alt='meal Image' className='w-15 h-8' />
        <p className=' text-center font-bold p-2 w-full text-gray-100 '>Meal Mall</p>
      </div>
      <div className='flex flex-col h-full items-center justify-items-start'>
        <p className="font-semibold text-gray-600 mb-3 text-center">MAIN MENU</p>
        {navLinks.map((link)=>{
          const Icon = link.icon;
          return(
            <NavLink className={({isActive})=>`${styleNavLinks} ${isActive?"bg-amber-600 text-white gap-2" : "hover:bg-amber-200"}`}to={link.path}>
              <Icon />
              {link.name}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
export default Sidebar;