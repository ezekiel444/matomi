
import React, { useState } from 'react'
import CustomBtn from '../component/CustomBtn'

import { IoSearch } from 'react-icons/io5' 


export default function Portfolio() {
  const [filterCategoryNav,setFilterCategoryNav] = useState<string>("Branding")

  const handleFilterCategory = (category:string)=>{
    setFilterCategoryNav(category);
  }
  
  
  const getElement = (e:React.MouseEvent<HTMLUListElement, MouseEvent>)=>{

    if(e.currentTarget){
      e.currentTarget.querySelector("div")?.classList.add("portfolioEffect")
    }
  }

  const removeElement = (e:React.MouseEvent<HTMLUListElement, MouseEvent>)=>{

    if(e.currentTarget){
      e.currentTarget.querySelector("div")?.classList.remove("portfolioEffect")

    }
  }
  
  return (
    <>
    <div className='flex items-center justify-center flex-col'>
        <h1 className='text-center custom_h1'>Recent Portfolio</h1>
        <ul className='flex justify-center'>
           {Object.keys(Categories).map((category,id)=>(<li onClick={()=>handleFilterCategory(category)} className='mr-5' key={id}>{category}</li>))}
        </ul>
        
       <div className='w-[70em] h-[50em] bg-red-400'>
      {
         Object.entries(Categories).map((categorySection)=>{
          if(categorySection[0] == filterCategoryNav){
            return (
              <div className='grid grid-cols-3'>
                {categorySection[1].map((content)=>(
                  <ul
                 onMouseEnter={e=>getElement(e)}
                 onMouseLeave={e=>removeElement(e)}
                   className='h-80 w-80 p-0 relative rounded-xl bg-white ml-8 mt-7 flex flex-col justify-center items-center text-center'>
                    <li>{content.title}</li>
                    <li className='h-40 w-40'>
                      <img className='w-full' src={content.photo} alt="photo content" />
                    </li>

                    {/* hover detail */}

                    <div
                    className='h-0 overflow-hidden w-80 absolute rounded-xl bg-green-300 flex flex-col justify-center items-center text-center'>
                    <li><IoSearch size={"3em"}/></li>
                    <li>{content.title}</li>
                    </div>
                    </ul>
                ))}
             </div>
            )    
          }    
          })
      }
        </div>

       
    </div>
     <div className="h-60 bg-slate-500 flex justify-around  items-center">
     <div className=' '>
     <h1 className='custom_h1'>Interested to Work?</h1>
       <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
       <CustomBtn title='Contact' />
     </div>
     <div></div>
   </div>
    </>
  )
}


const Categories = {
  "All Categories":[
    {
    title:"Category 1",
    photo:require("./../portfolio_photos/2.png"),
    id:1
  }
],
  "Web Design":[
    {
    title:"Web design no 2",
    photo:require("./../portfolio_photos/3.png"),
    id:2
  }
],
  "Branding":[
    {
    title:"Branding no 3",
    photo:require("./../portfolio_photos/3.png"),
    id:3
  },
    {
    title:"Branding no 4",
    photo:require("./../portfolio_photos/4.png"),
    id:4
  },
    {
    title:"Branding no 5",
    photo:require("./../portfolio_photos/5.png"),
    id:5
  },
    {
    title:"Branding no 6",
    photo:require("./../portfolio_photos/6.png"),
    id:6
  },
    {
    title:"Branding no 7",
    photo:require("./../portfolio_photos/7.png"),
    id:7
  },
]
}

type content = {
  title: string;
  photo: any;
  id: number;
}
