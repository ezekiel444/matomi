
import React from 'react'
import BackgroundImageWrapper from './BackgroundImageWrapper'

import {ImLocation, ImPhone, } from "react-icons/im" 
import { IoMailSharp } from "react-icons/io5";
import {FaFacebookF, FaTwitter, FaGithub} from "react-icons/fa"
import {RiContactsFill} from "react-icons/ri"
import SocialMediaIcon from '../component/SocialMediaIcon';

const renderDetail = ()=>{
  tempData.contact.map(({icon,text})=>(
    <>
    <div>{icon}</div>
    <div>{text}</div>
    </>
  ))
}

export default function HomePage() {
  return (
    <div className='h-screen grid grid-cols-2 place-items-center content-center bg-red-800'>
      <main className="Intro">
        <div className="m-4 text-center text-white content-around bg-lightBlue h-8 w-28"
        style={{
          borderTopRightRadius:40,
          borderTopLeftRadius:40,
          borderBottomLeftRadius:0,
          borderBottomRightRadius:40
        }}
        >Hello I'm</div>
        <h1 className='custom_H1'>EZEKIEL MATOMI LUCKY</h1>
        <h3>Web Designer</h3>
        <section className="contact">
          <div>
           {tempData.contact.map(({icon,text})=>(
                <div className='flex flex-row items-center gap-2'>
                    <div>{icon}</div>
                    <div>{text}</div>
                </div>
  ))}
  
     <SocialMediaIcon/>      
          </div>
        </section>
      </main>
              
      <main className="h-[400px] w-[400px] rounded-full bg-rose-800 flex justify-center items-center">
      <div className='h-[350px] w-[350px] rounded-full bg-slate-800 flex justify-center items-center'>
      <div className='h-[300px] w-[300px] rounded-full '>
      <img className='rounded-full' src="/asset/me.jpg" alt="matomi"/>
      </div>
      </div>
      </main>
    </div>
  )
}


const tempData = {
  contact:[{
    icon:<IoMailSharp/>,
    text:"test1@example.com"
  },
  {
    icon:<ImPhone/>,
    text:"123456"
  },
  {
    icon:<ImLocation/>,
    text:"12 abc str."
  }
]
}