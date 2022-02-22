
import React from 'react'
import CustomBtn from './CustomBtn'

export default function FeaturedProject() {
  return (
    <div>
       <h1>Featured Projects</h1> 
       <div className="container">
           <div className="img">
               <img src="#" alt="#" />
           </div>
           <section className="webdesigner">
               <h3>Web design</h3>
               <h1>WRAP</h1>
               <h4>DESIGN DEVELOPMENT</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti impedit voluptate deserunt reprehenderit non excepturi nostrum! Amet pariatur dolores ipsa eius necessitatibus quos qui repellat nihil, molestias, id dignissimos.
               Deleniti est exercitationem, rerum commodi sunt delectus assumenda culpa natus, fugit nostrum nesciunt officia odio aperiam ipsa debitis omnis magnam ratione, quisquam quia! Exercitationem unde molestias magnam, saepe praesentium quis?</p>
               <CustomBtn title='View Details' />
               <div className="comment">
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita illo asperiores soluta. Ut debitis velit quis veniam eos temporibus laudantium. Facilis nam, voluptatem quod unde laborum ad a delectus eum. <span>- NAME</span></p>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita illo asperiores soluta. Ut debitis velit quis veniam eos temporibus laudantium. Facilis nam, voluptatem quod unde laborum ad a delectus eum. <span>- NAME</span></p>
               </div>
           </section>
       </div>
    </div>
  )
}
