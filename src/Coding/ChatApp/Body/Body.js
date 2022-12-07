import React from 'react'
import './Body.css'
function Body() {
  const chatMessages = [
    {
      name : "shiva kumar",
      Message : "Hii"
    },
    {
      name : "john",
      Message : "Hello"
    },
    {
      name : "shiva kumar",
      Message : "Good Morning"
    },
    {
      name : "john",
      Message : "Good Morning, What are you doing"
    },
    {
      name : "john",
      Message : "nothing"
    },
    {
      name : "shiva kumar",
      Message : "How was your work?"
    },
    {
      name : "shiva kumar",
      Message : "is it Ok?"
    },
    {
      name : "john",
      Message : "Yes, bit difficult to do"
    },
    {
      name : "shiva kumar",
      Message : "why, I think you have learned the technology"
    },
    {
      name : "shiva kumar",
      Message : "You have more knowldege than others"
    },
    {
      name : "john",
      Message : "Yes, need to spend some time, ok bye I have some other work"
    },
    {
      name : "shiva kumar",
      Message : "see you, bye"
    },
    {
      name : "john",
      Message : "Hii, Hello Good Morning"
    },
    {
      name : "shiva kumar",
      Message : "Good Morning, John"
    }

  ]
  return (
    <div className='wBodyContainer' >
      {chatMessages.map((item,index) => <div className = {item.name === "shiva kumar" ? "rightPosition" : "leftPosition"} >
        <span>{item.Message}</span>
      </div> )}
    </div>
  )
}

export default Body
