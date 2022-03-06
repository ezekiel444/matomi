
import React from 'react'
import ProgressBar from '../component/ProgressBar'

export default function () {
  return (
    <div className='w-full flex justify-evenly mt-10'>
        <main>
            <h1 className='custom_h1 text-center'>Technical skills</h1>
            <div className='w-[30em]'> 
                <ProgressBar bartype='line' progressTitle='Javascript' percentage={65}/>     
                <ProgressBar bartype='line' progressTitle='Css' percentage={80}/>     
                <ProgressBar bartype='line' progressTitle='Html' percentage={90}/>     
                <ProgressBar bartype='line' progressTitle='React' percentage={88}/>     
                <ProgressBar bartype='line' progressTitle='NodeJs' percentage={78}/>     
            </div>
        </main>
        <main>
        <h1 className='custom_h1 text-center'>Professional skills</h1>
        <div className='w-[30em] grid grid-cols-2 gap-4'>
              <ProgressBar bartype='circle' progressTitle='Communication' percentage={92} /> 
              <ProgressBar bartype='circle' progressTitle='Team work' percentage={88} /> 
              <ProgressBar bartype='circle' progressTitle='Creativity' percentage={80} /> 
              <ProgressBar bartype='circle' progressTitle='Product Management' percentage={70} /> 
        </div>
        </main>
    </div>
  )
}
