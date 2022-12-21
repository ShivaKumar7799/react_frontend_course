import React from 'react'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './LeftContent.css'

function LeftContent() {
  return (
    <div className='leftContentContainer' >
      <TagFacesIcon /> 
      <AttachFileIcon style={{rotate : "45deg"}} />
    </div>
  )
}

export default LeftContent