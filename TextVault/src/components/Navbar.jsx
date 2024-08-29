import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className='w-full h-12 bg-[#F7AB0A] pr-7 pl-7 flex justify-between items-center'>
     <h1 className='font-extrabold text-3xl font-serif'>Text<span className='text-red-600 text-4xl'>V</span>ault</h1>
     <div className='flex justify-between items-center p-1 px-3 text-[14px] font-bold rounded-sm text-white space-x-3 bg-red-600'>
        <p>Add</p>
        <p>Account</p>
     </div>
    </div>
    </div>
  )
}

export default Navbar