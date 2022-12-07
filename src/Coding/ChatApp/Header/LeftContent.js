import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function LeftContent() {
  return (
    <div className='wLeftContent' >
      <ArrowBackIcon />
      <img width = "30px" heigth = "30px" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_w_Bqpra0F_-HRdKJCxpkyKRAh8MJrzWOtA&usqp=CAU" alt="profilePic" />
      <span>Shiva Kumar</span>
    </div>
  )
}

export default LeftContent