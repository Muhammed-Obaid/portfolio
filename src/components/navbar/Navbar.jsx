import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <header className=''>
            <div className='head'>
                <div className='h-[70px] flex justify-between items-center text-lg px-8'>
                    <motion.div
                        initial={{ opacity: 0.2, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4 }}
                        className=' font-bold sm:text-3xl text-2xl'>Obaid
                    </motion.div>
                    <motion.ul 
                    // className={showNavbar ? "nav-list mobile-nav" : "nav-list"}
                    className='nav-list text-white'
                        initial={{ opacity: 0.2, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .4 }}
                    >
                        <Link to='/' className='li cursor-pointer  hover:text-orange-500 '>Home</Link>
                        <Link to='/about' className='li cursor-pointer hover:text-orange-500'>About</Link>
                        <Link to='/project' className='li cursor-pointer hover:text-orange-500'>Project</Link>
                        <Link to='/contact' className='li cursor-pointer hover:text-orange-500'>Contact</Link>
                    </motion.ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
