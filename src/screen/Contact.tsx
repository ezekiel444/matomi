
import { url } from 'inspector'
import React from 'react'

import {TiLocationArrow} from "react-icons/ti"
import {AiOutlineMail} from "react-icons/ai"
import {IoIosCall} from "react-icons/io"
import ContactContainer from './sub-contact/ContactContainer'

export default function Contact() {
  return (
    <div>
        <h1 className='text-center custom_h1'>Contact Me</h1>
       <div className="flex justify-evenly items-center h-screen" style={{backgroundImage:`url("/asset/contact.png")`}}>
       <main className=''>
           <ContactContainer
            Icon={TiLocationArrow}
            title={"Address"}
            detail={"96 rue stadlingrad, Grenoble"}
           />
           <ContactContainer
            Icon={AiOutlineMail}
            title={"Email"}
            detail={"matomiezekiel6@gmail.com"}
           />
           <ContactContainer
            Icon={IoIosCall}
            title={"Phone"}
            detail={"0753432920"}
           />
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

