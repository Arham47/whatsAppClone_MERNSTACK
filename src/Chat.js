import React from 'react'
import "./chat.css"
import {Avatar,IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import SearchOutlined from '@material-ui/icons/SearchOutlined'; 
import AttachFile from '@material-ui/icons/AttachFile'; 
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'; 
import MicIcon from '@material-ui/icons/Mic'; 
export default function chat() {
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src='https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png'/>
        <div className='chat_headerInfo'>
          <h3>Room Name</h3>
          <p>Last seen ...</p>
        </div>
        <div className='chat_headerRight'>
            <IconButton>
              <SearchOutlined/>
              
            </IconButton>
            <IconButton>
              <AttachFile/>

            </IconButton>
            <IconButton>
              <MoreVertIcon/>

            </IconButton>
            

        </div>
      </div>
      <div className='chat_body'>
         <p className='chat_message'>
          <span className='chat_name'>Arham</span>
          this is message
          <span classNAme="chat_timeStamp">{ new Date().toUTCString()}</span>
         </p>
        
         <p className='chat_message chat_reciever'>
          <span className='chat_name'>Arham</span>
          this is message
          <span className="chat_timeStamp">{ new Date().toUTCString()}</span>
         </p>
        
      </div>
      <div className='chat_footer'>
          <InsertEmoticonIcon/>
          <form>
            <input placeholder='Type a message' type="text"/>
            <button type='submit'>Submit a message</button>
          </form>
          <MicIcon/>
      </div>

    </div>
  )
}
