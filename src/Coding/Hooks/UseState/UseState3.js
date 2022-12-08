import React, { useState } from 'react'

function UseState3() {
  const [name, setName] = useState("");
  const nameChangeHandler = (event) => {
    console.log("name changed", event.target.name, event.target.value);
    setName(event.target.value)
  }
  return (
    <div>
      <label>Enter your Name :</label>
      <input type="text" name = "userFullName" value={name} onChange={nameChangeHandler} />
      <h2>Person name : {name}</h2>
    </div>
  )
}

export default UseState3