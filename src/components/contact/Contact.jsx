import React, { useRef } from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const varients = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k6a6fpd', 'template_czjmolr', form.current, {
        publicKey: 'eDMSe59wVO9VETAzl',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          alert('meg send successfully')
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <motion.div variants={varients} initial='initial' whileInView='animate' className='contact sm:py-0'>
        <motion.div variants={varients} initial='initial' whileInView='animate' className='main h-[100vh] flex-col sm:flex-row flex  sm:justify-around items-center '>
          <h1 className='  text-xl font-bold text-center sm:hidden  mt-20  text-white tracking-widest '>LET'S WORK TOGETHER</h1>
          <motion.div variants={varients} className='contactContainer h-[54%] mt-12 flex flex-col sm:gap-[12px] gap-[5px] px-2 sm:block hidden   '>
            <motion.h1 variants={varients} className=' md:text-5xl sm:text-4xl  text-3xl font-bold mb-4'>Let's work <br /> together</motion.h1>
            <motion.div variants={varients}>
              <h2 className='font-bold sm:text-xl text-lg'>Email</h2>
              <p className='font-light sm:text-base text-sm'>obaidsultan12@gmail.com</p>
            </motion.div>
            <motion.div variants={varients}>
              <h2 className='font-bold sm:text-xl text-lg'>Phone</h2>
              <p className='font-light sm:text-base text-sm'>03130211540</p>
            </motion.div>
            <motion.div variants={varients}>
              <h2 className='font-bold sm:text-xl text-lg'>Follow Me</h2>
              <div className='text-light'>
                <a href="https://www.facebook.com/profile.php?id=100004193476651" target='_blank'>
                  <FacebookIcon className='' /></a>
                <a href="https://www.instagram.com/obaid1912?igsh=MWluNm90b2Rlcjlpag==" target='_blank'>
                  <InstagramIcon /></a>
                <a href="https://www.linkedin.com/in/muhammad-obaid-3053002aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                  <LinkedInIcon /></a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className='fromContainer mt-12'>
            <motion.div className="phoneSVG stroke-orange-900"
              initial={{ opacity: 1, }}
              whileInView={{ opacity: 0 }}
              transition={{ duration: 2.5, delay: 1 }}>
              <svg className=' md:w-[350px] w-[200px]' height="320px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  style={{ stroke: 'orange' }}
                  strokeWidth={0.3}
                  fill='none'
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5 }}
                  d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </motion.div>
            <motion.form
              autoComplete='nope'
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              ref={form} onSubmit={sendEmail}
              className='flex flex-col gap-[10px]'>
              <input autoComplete='nope' type="text" placeholder='Name' name='name' required className=' border-[0.5px] border-gray-400 bg-transparent sm:p-2 p-1 rounded outline-none' id="" />
              <input autoComplete='nope' type="email" placeholder='Email' name='email' required className=' border-[0.5px] border-gray-400 bg-transparent sm:p-2 p-1 rounded outline-none' id="" />
              <textarea autoComplete='off' name='message' required className='bg-transparent border-[0.5px] rounded border-gray-400 sm:p-2 p-1 outline-none' placeholder='Message' rows={6} id=""></textarea>
              <button className=' bg-orange-500 text-black sm:p-2 p-1 rounded cursor-pointer'>Submit</button>
            </motion.form>
          </motion.div>
          <motion.div variants={varients} className='mobileContainer sm:mt-2 sm:hidden w-[100%]'>
            <motion.div className='flex flex-wrap pt-4'>
              <motion.div variants={varients} className='w-[40%] mx-4 py-1'>
                <h2 className='font-bold sm:text-xl text-lg'>Email</h2>
                <p className='font-light text-sm'>obaidsultan12@gmail.com</p>
              </motion.div>
              <motion.div variants={varients} className='w-[40%] mx-4 pb-1'>
                <h2 className='font-bold sm:text-xl text-lg'>Phone</h2>
                <p className='font-light text-sm '>03130211540</p>
              </motion.div>
              <motion.div variants={varients} className='w-[40%] mx-4'>
                <h2 className='font-bold sm:text-xl text-lg'>Follow Me</h2>
                <div className='text-light'>
                  <a href="https://www.facebook.com/profile.php?id=100004193476651" target='_blank'>
                    <FacebookIcon className='' /></a>
                  <a href="https://www.instagram.com/obaid1912?igsh=MWluNm90b2Rlcjlpag==" target='_blank'>
                    <InstagramIcon /></a>
                  <a href="https://www.linkedin.com/in/muhammad-obaid-3053002aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                    <LinkedInIcon /></a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Contact