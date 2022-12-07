import React, { useState } from 'react'

function UseState1() {
  const [count, setCount] = useState(4459);
  const resetValue = 4459
  const incrementFunction = () => {
    console.log("inc cliked outside")
    setCount(count + 1)
  }

  const decrementFunction = () => setCount(count - 1 )

  console.log("counter application rerendered", count);

  return (
    <div style = {{ width : "300px", border : "1px solid red", display : "flex", flexDirection : "column", alignItems : "center", margin : "20px auto"}} >
      <h1> {count} </h1>
      <div style={{marginBottom : "10px"}} >
      <button onClick={incrementFunction} >increment</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={decrementFunction} >decrement</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setCount(resetValue)} >Reset</button>
      </div>
    </div>
  )
}

export default UseState1