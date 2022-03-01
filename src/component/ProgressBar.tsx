
import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// pls enter "line" or "circle" as a prop

export default function  ProgressBar({bartype,percentage,progressTitle}:progressBarType) {

    switch(bartype){
        case "line": return (
            <div className='mb-4'> 
                 <div className='flex justify-between w-[400px]'>
                     <h2>{progressTitle}</h2>
                     <p>{percentage}%</p> 
                 </div>  
                <div className=" w-[400px] h-2 bg-gray-500 rounded-md overflow-hidden">
                <div className="bar w-[300px] h-2 bg-sky"></div>        
                </div>
            </div>
        )
        case "circle": return (
            <div className='w-[7em] m-0'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={3} />
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