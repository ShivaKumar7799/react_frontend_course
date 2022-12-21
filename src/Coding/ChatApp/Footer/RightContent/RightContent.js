import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import './RightContent.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { chatMessageSender } from '../../Redux/Features/ChatFeature';

function RightContent() {

  const chatMessages = useSelector((state) => state.chatMessages.value)
  const dispatch = useDispatch()
  
  const [inputMessage, setInputMessage] = useState("");
  const textMessageChange = (event) => {
    setInputMessage(event.target.value)
  }
  const messageSend = (event) => {
    event.preventDefault()
    console.log(inputMessage, "snded");
    console.log(chatMessages)
    setInputMessage("")
    dispatch(chatMessageSender([...chatMessages,{ name : "shiva kumar", Message : inputMessage }]))
  }
  return (
    <form onSubmit={messageSend} className='rightContentContainer' >
      <div className='messageInputField'  >
        <input type="text" value={inputMessage} onChange = {textMessageChange} placeholder=' Type a message'  />
      </div>
      <div>
        <SendIcon onClick = {messageSend} type="submit" />
      </div>
    </form>
  )
}

export default RightContent