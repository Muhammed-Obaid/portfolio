import React from 'react'
import Skill from '../../components/skills/Skill'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Sidebar from '../../components/sidebar/Sidebar'

const AboutPage = () => {
  return (
    <>
      <div className="above">
        <Navbar />
        <Sidebar />
      </div>
      <div className='scroll'>
        <Hero />
      </div>
      <div className="scroll">

        <Skill />
      </div>
    </>
  )
}

export default AboutPage
