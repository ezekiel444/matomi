
import React from 'react'
import BackgroundImageWrapper from '../screen/BackgroundImageWrapper'
import CustomBtn from './CustomBtn'

export default function FeaturedProject() {
  return (
   
      <div className='text-center mt-20'>
        <h1 className='mb-20 custom_h1'>Featured Projects</h1> 
        <div className="flex items-center justify-evenly">
            <div className="h-[25em] w-[35em] bg-slate-200">
                <img src="/asset/projectimg.png" alt="project img" />
            </div>
            <section className="flex flex-col items-start justify-evenly">
                <h3 className='text-sky font-bold text-[1.2em]'>Web design</h3>
                <h1 className='text-[3em]'>WRAP</h1>
                <h4 className='text-lg'>DESIGN DEVELOPMENT</h4>
                <p className='w-[20em] text-left ml-0 mt-4 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur soluta facere autem doloremque qui amet praesentium rem accusamus error illum quo quod, itaque, harum illo quia neque? Optio, culpa aliquam.
                Soluta quam itaque aut quidem impedit lorem*2 ratione est architecto, illo debitis eaque, quibusdam modi. Minus ut, accusamus at recusandae rem animi quos hic ratione quae. Reprehenderit nam quae illum assumenda.</p>
                
                <CustomBtn title='View Details' />   
                <article className="mt-7">
                    <p className='italic w-40 text-left'> maiores? Odit minima explicabo asperiores amet, qui modi quia </p>
                    <span className='justify-start flex mt-3 font-semibold'>- NAME</span>
                </article>
            </section>
        </div>
      </div>
  
  )
}
