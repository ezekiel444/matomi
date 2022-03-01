

import React from 'react'
import Logo from "../asset/art.svg"


export default function BackgroundImageWrapper({children}:propType) {
  
  return (
    <>   
        <div className='h-screen max-h-screen max-w-full bg-no-repeat bg-cover'
        style={{
          backgroundImage:`url("/asset/art.svg")`,
          opacity:0.1
        }}/>
        <div className='absolute top-0 h-screen w-full flex justify-evenly items-center'>
          {children}
        </div>
    </>
  )
}

type propType = {
  children?: any

}