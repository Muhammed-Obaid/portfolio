import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Hero from '../../components/hero/Hero'
import Project from '../../components/project/Project'
import Skill from '../../components/skills/Skill'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <>
      <div className='scroll'>
        <div className="above">
          <Navbar />
          <Sidebar />
        </div>
        <Hero />
      </div>
      <div className='scroll'>
        <Project />
      </div>
      <div className='scroll'>
        <Skill />
      </div>
      <div className='scroll'>
        <Contact />
      </div>
    </>
  )
}

export default Home
