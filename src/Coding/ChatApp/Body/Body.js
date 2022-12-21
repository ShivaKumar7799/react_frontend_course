import React from 'react'
import './Body.css'
import { useSelector } from 'react-redux'

function Body() {
  const chatMessages = useSelector((state) => state.chatMessages.value);
  return (
    <div className='wBodyContainer' >
      <div className='chatMessageContainer' >
        {chatMessages.map((item,index) => <div key={index} className = {item.name === "shiva kumar" ? "rightPosition" : "leftPosition"} >
          <span>{item.Message}</span>
        </div> )}
      </div>
    </div>
  )
}

export default Body
