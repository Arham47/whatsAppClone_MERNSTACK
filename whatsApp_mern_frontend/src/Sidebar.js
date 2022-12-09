import React from 'react'
import "./sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge'; 
import ChatIcon from '@material-ui/icons/Chat'; 
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import SearchOutlined from '@material-ui/icons/SearchOutlined'; 
import {Avatar,IconButton} from "@material-ui/core";
import SidebarChat from "./SidebarChat.js"

function SideBar() {
  return (

 <div className='sidebar'>
        <div className='sidebar_header'>
            <Avatar src='https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png'/>
             <div className='sidebar_headerRight'>
              
                <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                <IconButton>
                    <ChatIcon />
                    </IconButton>
                <IconButton>
                  <MoreVertIcon/>
                    </IconButton>
             </div>
        </div>
        <div className='sidebar_search'>
          <div className='sidebar_searchContainer'>
            <SearchOutlined/>
            <input placeholder='search or start new chat' type="text"/>
          </div>
        </div>
        <div className='sidebar_chat'>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>

 
 </div>
  )
}

export default SideBar