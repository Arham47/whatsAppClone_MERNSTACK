import React from 'react'
import { useState } from 'react';
import "./chat.css"
import {Avatar,IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import SearchOutlined from '@material-ui/icons/SearchOutlined'; 
import AttachFile from '@material-ui/icons/AttachFile'; 
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'; 
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios.js' 
import { AxiosError } from 'axios';


function Chat({message}) {
  // console.log(message);
  const  [input , setInput]=useState("");

  const sendMessage = async(e)=>{
    e.preventDefault();
await axios.post("/messages/new",{
  
    "message": JSON.stringify(input),
    "timeStamp": "just now!",
    "name": "arham",
    "recieved": "false"

})
setInput("")

  }
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
        {message.map((messages) => (
          <p className={`chat_message ${messages.recieved && 'chat_reciever'}`}>
          <span className='chat_name'>{messages.name}</span>
          {messages.message}
          <span className="chat_timeStamp">   
                 {messages.timeStamp}
          </span>
          </p>
        ))}
         
        
        
         {/* <p className='chat_message chat_reciever'>
          <span className='chat_name'>Arham</span>
          this is message
          <span className="chat_timeStamp">{ new Date().toUTCString()}</span>
         </p> */}
        
      </div>
      <div className='chat_footer'>
          <InsertEmoticonIcon/>
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type="text"/>
            <button type='submit' onClick={sendMessage}>Submit a message</button>
          </form>
          <MicIcon/>
      </div>

    </div>
  )
}

export default Chat
