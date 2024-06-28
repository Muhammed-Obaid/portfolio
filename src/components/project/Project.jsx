import React from 'react'
import './project.scss'
import { Button } from '@mui/material'
import eMart from '/images/eMart.png'
import weather from '/images/weather.png'
import { motion } from 'framer-motion'


const varients = {
  initial: {
    x: -340,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const Project = () => {
  return (
    <motion.div variants={varients} className='project sm:py-10 pt-10 '>
      <h2 className='sm:text-3xl text-2xl font-bold text-center sm:p-5 pt-6 text-white tracking-widest'>MY PROJECTS</h2>
      <motion.div variants={varients} initial='initial' whileInView='animate' className='projects flex sm:flex-row flex-col justify-around sm:h-[83%] h-[89%] items-center'>
        <motion.div variants={varients} className='box sm:p-5 p-3 m-4 rounded-lg flex flex-col items-center gap-[3px] sm:gap-[10px] sm:h-[80%] h-[100%] '>
          <div className='image'>
            <img src={eMart} className='rounded-full' alt=""  />
          </div>
          <h3 className='text-purple-500 font-bold text-xl'>E-Mart App</h3>
          <p className=' text-center text-sm sm:text-base w-[100%] sm:w-[70%]'>E-shop app Using react, react-icons, matirial-ui, sass and Apis</p>
          <a className='' href="https://e-commerce-obaid.netlify.app/" target='_blank'>
            <button className='border-[0.5px] sm:py-2 sm:px-3 py-1 px-2 rounded-lg  text-white'>CLICK TO SEE</button>
          </a>
        </motion.div>
        <div className='box  rounded-lg sm:p-5 p-3 m-4 flex flex-col  items-center gap-[3px] sm:gap-[10px] sm:h-[80%] h-[90%]'>
          <div className='image'>
            <img src={weather} className='rounded-full' alt="" />
          </div>
          <h3 className='text-purple-500 font-bold text- sm:text-xl'>Weather-App</h3>
          <p className='text-center text-sm sm:text-base w-[100%] sm:w-[70%]'>Real time weather app</p>
          <a className='' href="https://check-weather-up.netlify.app/" target='_blank'>
            <button className='border-[0.5px] sm:py-2 sm:px-3 py-1 px-2 rounded-lg  text-white  '>CLICK TO SEE</button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Project
