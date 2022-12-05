import React from 'react'
import './LeftNav.css'
import MyntraLogo from "../../../../Assets/NavBarLogo/myntraLogo.png"

function LeftNav() {
  return (
    <div className='leftNavContainer' >
      <div>
        <img className='myntraLogo' src = {MyntraLogo} alt ="MyntraLogo" />
      </div>
      <div className='navItems' >
        <span> MEN </span>
        <span> WOMEN</span>
        <span> KIDS </span>
        <span> HOME & LIVING</span>
        <span> BEAUTY</span>
        <span> STUDIO <sup>New</sup> </span>
      </div>
    </div>
  )
}

export default LeftNav