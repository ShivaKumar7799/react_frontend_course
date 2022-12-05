import React from 'react'

function ReactFunction() {

  const outsideJsx = (event) => {
    console.log(event.target.name)
    // console.log("outside jsx function call")
  }
  return (
    <div>
        <h1>Functions:</h1>
        <h2>Inline Function call</h2>
        <button name = "firstButton" onClick={(event) => outsideJsx(event)} >Inline arrow Function call</button>
        <h2>Outside Jsx function call</h2>
        <button name ="secondButton" onClick={(outsideJsx)} > Outside Jsx function</button>
    </div>
  )
}

export default ReactFunction