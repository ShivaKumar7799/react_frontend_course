import React from 'react'
import './Body.css'
import ActiveLastBreadcrumb from './BreadCrumbs/BreadCrumb'
import SwipeableTextMobileStepper from './Corousel/Corousel'

function Body() {
  return (
    <div className='bodyContainer' >
      <ActiveLastBreadcrumb />
      <SwipeableTextMobileStepper />
    </div>
  )
}

export default Body