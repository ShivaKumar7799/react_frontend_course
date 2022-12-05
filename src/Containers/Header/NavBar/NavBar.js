import React from 'react'
import LeftNav from './LeftNav/LeftNav'
import RightNav from './RightNav/RightNav'

function NavBar() {
  return (
    <div style = {{ display : "flex", justifyContent : "space-between" }} >
      <LeftNav />
      <RightNav />
    </div>
  )
}

export default NavBar