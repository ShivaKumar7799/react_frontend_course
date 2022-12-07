import React from 'react'
import './Header.css'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Header() {
  return (
    <div className='wHeaderContainer' >
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Header