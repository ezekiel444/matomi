
import React from 'react'

import {BsBullseye, BsCodeSlash} from "react-icons/bs"
import {FaLayerGroup} from "react-icons/fa"
import {IoMdDownload} from "react-icons/io"
import CustomBtn from '../component/CustomBtn'
import FeaturedProject from '../component/FeaturedProject'



export default function 
() {
  return (
    <>
    <main className='flex justify-around my-16 gap-5'>
      <div className="w-48">
        <img className='w-full' src="/asset/about_me.svg" alt="#" />
      </div>
    <section className="w-52">
      <h1 className='custom_h1'>About me</h1>
      <p className='w-5 flex-wrap'>Hello, </p>
      <ul className="flex mx-3 test flex-wrap" >
        <li>html</li>
        <li> css</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>

    
     <CustomBtn title='Download Cv' icon={IoMdDownload} />
    
    </section>
   
    </main>
     <div className="">
     <h1 className='custom_h1 text-center'>What i do</h1>
     <div className="flex gap-6 justify-center">
       {whatido.map(({icon,text,title})=>(
         <div className='h-72 w-80 custom_shadow'>
           <div className="my-5 mx-4">{icon}</div>
           <h1 className='custom_h1 mx-4'>{title}</h1>
           <p className='mx-4'>{text}</p>
         </div>
       ))}
     </div>
     <FeaturedProject />
     </div>
    </>
  )
}

const size = 25


const whatido = [
  {
    icon:<BsBullseye size={size} color="purple"/>,
    title:"UI Design",
    text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
  },
  {
    icon:<BsCodeSlash size={size} color="red"/>,
    title:"App Development",
    text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
  },
  {
    icon:<FaLayerGroup size={size} color="#99CCFF" />,
    title:"Web Development",
    text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
  }
  
]