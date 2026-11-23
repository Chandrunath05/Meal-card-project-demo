import React from 'react'

export const Topbar = () => {
  return (
    <div className=' w-full flex justify-between items-center px-4 h-13 bg-amber-500 shadow-black-700'>
      <div>
        <p>Dashboard</p>
      </div>
      <div className='flex gap-2 items-center justify-center'>
        <input className='border-1 border-red-100 rounded-2xl p-1 text-center bg-amber-50' placeholder='search here..' />
        <p>Logo</p>
      </div>
    </div>
  )
}
export default Topbar;