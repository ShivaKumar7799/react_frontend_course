import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function RightContent() {
  return (
    <div className='wRightContent'>
      <CallIcon />
      <AttachFileIcon className='attachmentIcon' />
      <MoreVertIcon />
    </div>
  )
}

export default RightContent