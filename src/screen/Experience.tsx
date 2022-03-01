
import React from 'react'
import EducationWord from './sub-experience/EducationWord'

export default function Experience() {
  return (
    <div className='flex justify-evenly my-10 w-full h-screen'>
        <main className=''>
            <h1 className='custom_h1 mb-5'>Education</h1>
          <EducationWord 
          title={"Art & Multimedia From"}
          school={"Oxford University"}
          year={"2005-2008"}
          context={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} 
    />
          <EducationWord 
          title={"Art & Multimedia From"}
          school={"Oxford University"}
          year={"2005-2008"}
          context={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} 
    />
          <EducationWord 
          title={"Art & Multimedia From"}
          school={"Oxford University"}
          year={"2005-2008"}
          context={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."} 
    />
        </main>
        <main className=''> 
            <h1 className='custom_h1 mb-5'>Work Experience</h1>
            <EducationWord
                title='UI/UX Designer From'
                school='Auchi polyTechnic'
                year={"2005-2008"}
                context={contextData2}
            />

            <EducationWord 
                title={"Art & Multimedia From"}
                school={"Oxford University"}
                year={"2005-2008"}
                context={contextData} 
    />
            <EducationWord 
                title={"Art & Multimedia From"}
                school={"Oxford University"}
                year={"2005-2008"}
                context={contextData} 
    />
        </main>
    </div>
  )
}


const contextData = ["JavaScript", "Project Management"]
const contextData2 = ["Learning Java", "Animation"]