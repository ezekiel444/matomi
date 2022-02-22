

import { url } from 'inspector'
import React from 'react'
import Logo from "../asset/art.svg"


export default function BackgroundImageWrapper({children}:propType) {
  console.log(children);
  
  return (
    <div className='max-h-full max-w-full h-screen bg-no-repeat bg-cover opacity-customOpacity'
    style={{
      backgroundImage:`url("/asset/art.svg")`
    }} >
   
   </div>
  )
}

type propType = {
  children:React.ReactNode
}