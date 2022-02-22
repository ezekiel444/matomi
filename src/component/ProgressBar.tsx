
import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// pls enter "line" or "circle" as a prop

export default function ProgressBar({bartype}:progressBarType) {
    const percentage = 66;
    switch(bartype){
        case "line": return (
            <div className=" w-[300px] h-5 bg-gray-500 rounded-md overflow-hidden">
            <div className="bar w-[200px] h-5 bg-sky"></div>        
             </div>
        )
        case "circle": return (
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )
        default:return (
            <div>pls enter either "line" or "circle" as a prop to "bartype"</div>
        )
    }
    
}

type progressBarType = {
    bartype:string
}