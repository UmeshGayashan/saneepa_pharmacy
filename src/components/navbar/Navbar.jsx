import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className="wrapper">
            <span>Saneepa Pharmacy</span>
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