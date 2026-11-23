import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import DashboardLayouts from './DashboardLayouts';
import { LayoutDashboard } from 'lucide-react';
import { UtensilsCrossed } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
export const Sidebar = () => {
  const navLinks = [
    {name:'Dashboard', icon:LayoutDashboard, path:"/"},
    {name:'Meal Card', icon:UtensilsCrossed, path:"/mealCard"},
    {name:'Meal Create', icon:CirclePlus, path:"/meals/create"}
  ]
  const styleNavLinks = "p-2 w-full flex items-center gap-3 rounded-md mb-4";

  return (
    <div className='w-50 bg-amber-300 flex flex-col gap-10 h-full'>
      <div className='flex'>
        <img></img>
        <p >Meal Mall</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600 mb-3 border-b-2 text-center">MAIN MENU</p>
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