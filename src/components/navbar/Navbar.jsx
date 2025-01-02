import React from 'react'
import './Navbar.css'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className="wrapper">
            <motion.span
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
            >Saneepa Pharmacy</motion.span>
            <div className='social'>
                <a href='#'><img src='src/assets/facebook.png' alt=''/></a>
                <a href='#'><img src='src/assets/facebook.png' alt=''/></a>
                <a href='#'><img src='src/assets/facebook.png' alt=''/></a>
                <a href='#'><img src='src/assets/facebook.png' alt=''/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar