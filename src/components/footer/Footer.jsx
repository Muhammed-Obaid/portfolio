import React from 'react'
import './footer.scss'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <>
      <div className='port-footer'>
        <div className='footer-details'>
          <h2>Muhammad Obaid</h2>
          <p>Made by Muhammad Obaid</p>
        </div>
        <div className='footer-details'>
          <h2>Subscribe</h2>
          <input type="text" name="" id="" placeholder='EMAIL' />
          <button>Subscribe</button>
        </div>
        <div className='footer-details'>
          <h2>Follow Me</h2>
          <div className='social-icon'>
            <a href="https://www.facebook.com/profile.php?id=100004193476651" target='_blank'>
              <FacebookIcon sx={{ fontSize: 30 }} />
            </a>
            <a href="https://www.instagram.com/obaid1912?igsh=MWluNm90b2Rlcjlpag==" target='_blank'>
              <InstagramIcon sx={{ fontSize: 30 }} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-obaid-3053002aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </a>
          </div>
        </div>
        <div className='footer-details'>
          <h2>Call Me</h2>
          <p>+923130211540</p>
          <h2>Email Me</h2>
          <p>obaidsultan12@gmail.com</p>
        </div>
      </div>
      <div className="copy-r">@{new Date().getFullYear()} Muhammad Obaid. All Rights Reserved</div>
    </>
  )
}

export default Footer
