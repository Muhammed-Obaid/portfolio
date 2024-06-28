import React from 'react'
import Contact from '../../components/contact/Contact'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const ContactPage = () => {
  return (
    <div>
      <div className='above'>
        <Navbar />
        <Sidebar />
      </div>
      <Contact />
    </div>
  )
}

export default ContactPage