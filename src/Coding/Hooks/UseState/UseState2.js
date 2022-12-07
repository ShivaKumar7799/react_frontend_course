import React, { useState } from 'react'

function UseState2() {
  const [cartItems, setCartItems] = useState(4)
  const updateCartItems = (event) => {
    console.log(event.target.value)
    setCartItems(cartItems + parseInt(event.target.value))
  }
  const resetCart = () => setCartItems(0)
  return (
    <div>
      <h1>Cart Items : {cartItems} </h1>
      <button value = {1} onClick={(event) => updateCartItems(event)} > buy 1</button>
      <button value = {10} onClick={updateCartItems} >buy 10</button>
      <button value = {25} onClick={updateCartItems} >buy 25</button>
      <button value = {500} onClick={updateCartItems} >buy 500</button>
      <button onClick = {resetCart} > Reset </button>
    </div>
  )
}

export default UseState2