
import { url } from 'inspector'
import React from 'react'

import {TiLocationArrow} from "react-icons/ti"
import {AiOutlineMail} from "react-icons/ai"
import {IoIosCall} from "react-icons/io"

export default function Contact() {
  return (
    <div>
        <h1 className='text-center custom_h1'>Contact Me</h1>
       <div className="flex justify-around h-screen" style={{backgroundImage:`url("/asset/contact.png")`}}>
       <main>
            <div className="flex h-36 w-[30em] justify-center items-center custom_shadow">
                <div className='h-20 w-20 mr-4 rounded-full flex justify-center items-center custom_border'>
                    <TiLocationArrow size={30} />
                </div>
               <div className="contact_title">
               <h2 className='custom_h1'>Address</h2>
                <p>5th Avenue, 34th floor,Grenoble</p>
               </div>
            </div>
            </main>
            <main className='flex flex-col w-1/3'>              
                <input className='custom_input'  type="text" placeholder='Name'/>
                <input className='custom_input' type="text" placeholder='email'/>  
                <textarea className='h-40' style={{resize:"none"}} name="" id="" placeholder='Your message'></textarea> 
                <button className='h-10 w-[30.1em] rounded-md text-white text-xl bg-sky'>Send Message</button> 
            </main>
       </div>
    </div>
  )
}

