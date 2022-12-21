import React from 'react'
import './Footer.css'
import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'

function Footer() {
  return (
    <div className = "footerContainer" >
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Footer