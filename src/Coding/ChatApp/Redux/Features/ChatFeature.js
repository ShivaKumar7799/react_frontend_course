import {createSlice} from '@reduxjs/toolkit'
import { chatMessagesData } from '../../ChatData/ChatData'
const initialState = chatMessagesData;

export const ChatMessageSlice = createSlice({
  name : "chatMessages",
  initialState : {value : initialState},
  reducers : {
    chatMessageSender : (state,action) => {
      state.value = action.payload
    }
  }
})

export const {chatMessageSender} = ChatMessageSlice.actions

export default ChatMessageSlice.reducer