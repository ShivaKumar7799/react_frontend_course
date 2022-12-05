import React from 'react'

function ConditionalRendering() {
  let currentYear = 2022;
  let personAge = 34;
  return (
    <div>
      {/* { currentYear === 2022 ? "Present Year" : "We are not in 2022" } */}
      {/* Eligibility : { personAge >= 18 ? "Eligible to Vote" : "Not Eligible to Vote" } */}
    </div>
  )
}

export default ConditionalRendering