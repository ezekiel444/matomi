
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex justify-around'>
        <main className="bg-blue-400 text-white">EML</main>
        <ul className="nav flex flex-row mx-2">
            <li>Home</li> 
            <li>About</li>
            <li>Skills</li>
            <li>Experiences</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
