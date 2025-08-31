import React from 'react'
import hero from '../assets/hero.png'
import { FaFacebookSquare, FaLinkedin ,FaTwitterSquare} from "react-icons/fa";

const Hero = () => {
  return (
    <section id='hero' className=' flex flex-col md:flex-row justify-center px-5 md:py-32 py-20  bg-primary'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white md:text-5xl text-3xl font-hero-font'>
            Hi, <br/>
            I'm <span className='text-bold text-black'>Somasundaram</span> <br/>
            <p className='md:text-2xl text-xl'>I'm a Front End Developer</p>
        </h1>
        <div className='flex gap-5 py-10'>
            <a href="#" className='hover:text-white transition-all'><FaLinkedin  size={40}/></a>
            <a href="#" className='hover:text-white transition-all'><FaTwitterSquare  size={40}/></a>
            <a href="#" className='hover:text-white transition-all'><FaFacebookSquare  size={40} /></a>
        </div>
        </div>
        <img className='md:w-1/3' src={hero} alt="" />
      
    </section>
  )
}

export default Hero
