
import React from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// pls enter "line" or "circle" as a prop

export default function  ProgressBar({bartype,percentage,progressTitle}:progressBarType) {

        let defaultBG = "#4CAF50"
    if(percentage > 100) percentage = 0
    if(percentage < 50) defaultBG = "red"

    switch(bartype){
        case "line": return (
            <div className='mb-4'> 
                 <div className='flex justify-between w-[400px]'>
                     <h2>{progressTitle}</h2>
                     <p>{percentage}%</p> 
                 </div>  
                <div className=" w-[400px] h-2 rounded-md overflow-hidden bg-gray-500">
                <div className="bar h-2" style={{
                   width:`${percentage * 4}px`,
                   background: defaultBG
                }}></div>        
                </div>
            </div>
        )
        case "circle": return (
            <div className='w-[7em] m-0'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={3} styles={buildStyles({pathColor:defaultBG})} />
                <h3 className='text-center'> {progressTitle}</h3>
            </div>
        )
        default:return (
            <div>pls enter either "line" or "circle" as a prop to "bartype"</div>
        )
    }
    
}

type progressBarType = {
    bartype:string
    percentage:number
    progressTitle:string

}