
import React from 'react';
import BackgroundImageWrapper from './screen/BackgroundImageWrapper';
import Logo from "./asset/me.jpg"
import HomePage from './screen/HomePage';
import NavBar from './screen/NavBar';
import About from './screen/About';
import Skill from './screen/Skill';
import Experience from './screen/Experience';
import Contact from './screen/Contact';
import CustomBtn from './component/CustomBtn';
import Portfolio from './screen/Portfolio';
import BlogScreen from './screen/BlogScreen';
import SocialMediaIcon from './component/SocialMediaIcon';
import Footer from './screen/Footer';
import FeaturedProject from './component/FeaturedProject';

function App() {
  return (
    <div className='container mx-auto box-border max-h-screen max-w-full'>
    <HomePage/>
   <About/>
   <Skill/>
   <Experience/>
   <Portfolio/>
   <Contact />
   <Footer/>
    </div>
  );
}

export default App;
