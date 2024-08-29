import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const TextEditor = () => {
  return (
    <div className=' relative flex pt-5 flex-col justify-center space-y-2 items-start pl-3'>
         <input type='text' className='w-[60%] border rounded-lg p-1 border-gray-400 text-2xl h-[2.5rem]' placeholder='Title'/>
         <div className='space-y-11 flex flex-col lg:flex-row md:flex-row sm:flex-row '>
         <div className='flex flex-col justify-center items-center space-y-20 lg:space-y-11 md:space-y-12 sm:space-y-14'>
        <ReactQuill style={{borderRadius:'17px'}} className='h-[18rem] w-full pr-2 sm:w-[40rem] lg:w-[52rem] md:[42rem]' theme='snow' />
         <button className=' p-1 px-4 bg-orange-800 text-white rounded-md left-[15rem]'>Publish</button>
         </div>
        <div className='font-bold space-y-2 w-full lg:w-[12rem] md:w-[12rem] sm:w-[11rem]'>
        <p className='border-b border-gray-300'>Photos</p>
        <p className='border-b border-gray-300'>Options</p>
        <p className='border-b border-gray-300 '>Import from file</p>
        </div>
         </div>
    </div>
  )
}

export default TextEditor