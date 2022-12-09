import React from 'react'
import "./SidebarChat.css"

import {Avatar,IconButton} from "@material-ui/core";

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className='sidebarChat_info'>
            <h2>Room name</h2>
            <h2>This is Last Message</h2>
         </div>
    </div>
    
  )
}

export default SidebarChat