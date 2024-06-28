import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const textVarient = {
  initial: {
    x: -500,
    opacity: 0,

  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}
const Hero = () => {
  return (
    <div className='hero flex items-center sm:justify-around justify-centerW'>
      <motion.div variants={textVarient} initial='initial' animate='animate' className=" info h-[100%] sm:w-[43%] 
      md:gap-[12px] gap-[8px] flex flex-col justify-center pt-6 ">
        <motion.h1 className='sm:text-xl text-lg text-purple-700 font-bold sm:tracking-[4px] tracking-[3px]'>MUHAMMAD OBAID</motion.h1>
        <motion.h2 className='sm:text-3xl md:text-4xl text-2xl text-white'>Frontend Developer</motion.h2>
        <motion.p className=' md:text-lg py-1 sm:w-[99%] w-[86%] '>I am Obaid and I am from Karachi, Pakistan. A front-end developer. Currently I am doing bachelors in Software engineering at karachi university as well as also working to improve my web-skills</motion.p>
        <div className="btns">
          <Link to='/contact'>
            <button className='border-[0.5px] sm:text-base text-sm text-white mr-4 rounded-md'>CONTACT ME</button>
          </Link>
          <Link to='/about'>
            <button className='border-[0.5px] sm:text-base text-sm text-white mr-4 rounded-md'>READ MORE</button>
          </Link>
        </div>
      </motion.div>
      <div className='pic sm:h-[70%] '>
        <img className='h-[100%] w-[100%]' src='./images/profile.jpeg' alt="img" />
      </div>
    </div>
  )
}

export default Hero
