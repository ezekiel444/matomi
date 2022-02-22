
import React from 'react'

export default function Experience() {
  return (
    <div className='flex justify-around my-2 w-full h-screen'>
        <main className='h-[10em] w-[30em] bg-slate-300'>
            <h1>Education</h1>
            <div>
                <h1>Art & Multimedia From <span className='text-green-500'> Oxford University</span></h1>
                <p className='text-green-500'>2005-2008</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </main>
        <main className='h-[10em] w-[30em] bg-slate-300'> 
            <h1>Work Experience</h1>
            <h1>Art & Multimedia From <span className='text-green-500'> Oxford University</span></h1>
                <p className='text-green-500'>2005-2008</p>
                <h6>Responsibility :</h6>
                <ul>
                    <li>Validate CSS</li>
                    <li>Project Management</li>
                </ul>
        </main>
    </div>
  )
}
