import React from 'react'
import './InCludeJsStyling.css'

function InCludeJs() {
  let addition = 2 + 2;
  const presentYear = 2022;
  console.log("include js Component Rendered")
  return (
    <div className='jsContainer' >
      <h2> {addition}  </h2>
      <h2> Present Year is { presentYear } </h2>
    </div>
  )
}

export default InCludeJs