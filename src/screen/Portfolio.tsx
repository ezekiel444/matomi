
import React from 'react'
import CustomBtn from '../component/CustomBtn'

export default function Portfolio() {
  return (
    <div>
        <h1>Recent Portfolio</h1>
        <ul>
            <li>All Categories </li>
            <li>Web Design </li>
            <li>Branding </li>
        </ul>
        <div>img</div>

        <div className="h-60 bg-slate-500 flex items-center">
          <div className='ml-20 mt-8'>
          <h1 className='custom_h1'>Interested to Work?</h1>
            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            <CustomBtn title='Contact' />
          </div>
        </div>
    </div>
  )
}
