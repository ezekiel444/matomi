
import React from 'react'
import ProgressBar from '../component/ProgressBar'

export default function () {
  return (
    <div className='w-screen flex justify-around'>
        <main>
            <h1>Technical skills</h1>
            <div className="content"> 
           <div className='flex justify-between'>
              <h2>Javascipt</h2>
              <p>20%</p>
           </div>
            </div>
        </main>
        <main>
        <h1>Professional skills</h1>
              <ProgressBar bartype='line'/> 
      
       <h3> Communication </h3>
        </main>
    </div>
  )
}
