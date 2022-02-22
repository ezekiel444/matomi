
import React from 'react'
import { IoMdDownload } from 'react-icons/io'

export default function CustomBtn({title,icon}:icontype) {
  return (
      <div className='flex bg-sky justify-center items-center w-[200px] rounded-full py-2 text-lg font-bold text-white'>
           {title}
    {icon && <IoMdDownload className='mx-1' size={20} color="text-white"/>}
      </div>
    
 
  )
}

type icontype = {
    title:string
    icon?:React.ComponentType
}