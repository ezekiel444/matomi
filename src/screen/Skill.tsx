
import React from 'react'
import ProgressBar from '../component/ProgressBar'

export default function () {
  return (
    <div className='w-full flex justify-around mt-10'>
        <main>
            <h1 className='custom_h1 text-center'>Technical skills</h1>
            <div className='w-[30em]'> 
                <ProgressBar bartype='line' progressTitle='Javascript' percentage={65}/>     
                <ProgressBar bartype='line' progressTitle='Css' percentage={85}/>     
                <ProgressBar bartype='line' progressTitle='Html' percentage={95}/>     
                <ProgressBar bartype='line' progressTitle='React' percentage={88}/>     
                <ProgressBar bartype='line' progressTitle='NodeJs' percentage={75}/>     
            </div>
        </main>
        <main>
        <h1 className='custom_h1 text-center'>Professional skills</h1>
        <div className='w-[30em] grid grid-cols-2 gap-4'>
              <ProgressBar bartype='circle' progressTitle='Communication' percentage={50} /> 
              <ProgressBar bartype='circle' progressTitle='Team work' percentage={50} /> 
              <ProgressBar bartype='circle' progressTitle='Creativity' percentage={50} /> 
              <ProgressBar bartype='circle' progressTitle='Product Management' percentage={50} /> 
        </div>
        </main>
    </div>
  )
}
