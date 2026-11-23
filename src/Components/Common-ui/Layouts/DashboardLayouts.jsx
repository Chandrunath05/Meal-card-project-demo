import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';
export const DashboardLayouts = () => {
  return (
    <div className='flex w-full h-screen'>
      <Sidebar />
      <div className='flex flex-col flex-1 gap-4 w-full h-scree'>
        <Topbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default DashboardLayouts;
