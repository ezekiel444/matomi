
import React from 'react'

import {BsBullseye, BsCodeSlash} from "react-icons/bs"
import {FaLayerGroup} from "react-icons/fa"
import {IoMdDownload} from "react-icons/io"
import CustomBtn from '../component/CustomBtn'
import FeaturedProject from '../component/FeaturedProject'
import BackgroundImageWrapper from './BackgroundImageWrapper'



export default function About() {
  return (
    <>
    <main className='flex justify-evenly my-16 gap-5 custom_shadow'>
      <div className="h-[40em] w-[30em]  rounded-xl overflow-hidden">
        <img className='w-full h-full' src="/asset/about_me.svg" alt="cartoon setup" />
      </div>
    <section className="flex custom_firstletter justify-center flex-col">
      <h1 className='custom_h1'>Hello,</h1>
      <p className='w-[30em] h-[5em] text-[1.0em] break-words'>I’m a Matomi, web-developer based on Grenoble. I have rich experience in web site design & building and customization. Also I am good at </p>
      <ul className="flex gap-3 mb-5 about flex-wrap" >
        <li>html</li>
        <li> css</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>

     <CustomBtn title='Download Cv' icon={IoMdDownload} /> 
    </section>
   
    </main>
     <div className="mt-52">
     <h1 className='custom_h1 mb-20 text-center'>What I do</h1>
     <div className="flex gap-8 justify-center">
       {whatido.map(({icon,text,title})=>(
         <div className='h-72 w-80 custom_shadow'>
           <div className="my-5 mx-4">{icon}</div>
           <h1 className='custom_h1 mx-4'>{title}</h1>
           <p className='mx-4'>{text}</p>
         </div>
       ))}
     </div>
     <FeaturedProject/>
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