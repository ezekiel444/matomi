
import React from 'react'

import {FaFacebookF, FaTwitter, FaGithub} from "react-icons/fa"
import {RiContactsFill} from "react-icons/ri"

export default function SocialMediaIcon() {
  return (
    <div className='flex gap-6 my-6'>
  {tempData.iconUrl.map(({icon})=>(<div>{icon}</div>))}
  </div>
  )
}



const tempData = {
  iconUrl:[
    {
      icon:<FaFacebookF/>
    },
    {
      icon:<FaGithub/>
    },
    {
      icon:<FaTwitter/>
    },
    {
      icon:<RiContactsFill/>
    },
  ]
  }