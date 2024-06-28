import React, { useState } from 'react'
import './sidebar.scss'
import { motion } from 'framer-motion'
import ToggleButton from './toggleButton/ToggleButton';
import { Link } from 'react-router-dom';


const textVarients = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },


    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}
const itemVarients = {
    open: {
        y: 0,
        opacity: 1
    },


    closed: {
        y: 50,
        opacity: 0
    }
}

const Sidebar = () => {

    const [show, setShow] = useState(false)
    const varients = {
        open: {
            clipPath: 'circle(1000px at 50px 50px',
            transition: {
                type: 'spring',
                stiffness: 30
            }
        },
        closed: {
            clipPath: 'circle(30px at 200px 40px',
            transition: {
                delay: 0.2,
                // type: 'spring',
                stiffness: 200,
                demping: 500
            }
        }
    }
    return (
        <motion.div className='sidebar ' animate={show ? 'open' : 'closed'}>
            <motion.div variants={varients} className='bg flex flex-col items-center justify-center' >
                <motion.ul className='flex flex-col text-gray-900 font-medium gap-[10px]' variants={textVarients}>
                    <Link to='/'>
                        <motion.li className='text-lg cursor-pointer text-white' whileHover={{ scale: 1.1 }} variants={itemVarients}>
                            Home
                        </motion.li>
                    </Link>
                    <Link to='/about'>
                        <motion.li className='text-lg cursor-pointer text-white' whileHover={{ scale: 1.1 }} variants={itemVarients}>
                            About
                        </motion.li>
                    </Link>
                    <Link to='/project'>
                        <motion.li className='text-lg cursor-pointer text-white' whileHover={{ scale: 1.1 }} variants={itemVarients}>
                        Project
                        </motion.li>
                    </Link>
                    <Link to='/contact'>
                        <motion.li className='text-lg cursor-pointer text-white' whileHover={{ scale: 1.1 }} variants={itemVarients}>
                        Contact
                        </motion.li>
                    </Link>
                </motion.ul>
            </motion.div>
            <ToggleButton setShow={setShow} />
        </motion.div>
    )
}

export default Sidebar
