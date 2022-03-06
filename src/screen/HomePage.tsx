
import BackgroundImageWrapper from './BackgroundImageWrapper'

import SocialMediaIcon from '../component/SocialMediaIcon';

import {homePageAddresseIcon} from "../data/StoreRoom"



export default function HomePage() {

  const renderDetail = homePageAddresseIcon.contact.map(({icon,text},id)=>(
    <div className='flex flex-row items-center gap-2 mt-2' key={id}>
        <div>{icon}</div>
        <div>{text}</div>
    </div>
  ))

  return (
    <BackgroundImageWrapper>
      <main className="Intro">
        <div className=" mb-4 font-semibold text-lg flex items-center justify-center text-white content-around bg-lightBlue h-8 w-28"
        style={{
          borderTopRightRadius:40,
          borderTopLeftRadius:40,
          borderBottomLeftRadius:0,
          borderBottomRightRadius:40
        }}
        >Hello I'm</div>
        <h1 className='custom_h1'>EZEKIEL MATOMI LUCKY</h1>
        <h2 className='custom_h2'>Web Designer</h2>
        <section className="mt-6">         
           {renderDetail}
          <SocialMediaIcon/>           
        </section>
      </main>
              
      <main className="h-[400px] w-[400px] rounded-full bg-red-100 flex justify-center items-center">
      <div className='h-[350px] w-[350px] rounded-full bg-slate-500 flex justify-center items-center'>
      <div className='h-[300px] w-[300px] rounded-full '>
      <img className='rounded-full' src="/asset/me.jpg" alt="matomi"/>
          </div>
        </div>
      </main>
    </BackgroundImageWrapper>
  )
}


