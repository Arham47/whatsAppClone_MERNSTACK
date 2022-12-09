
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect } from 'react';
import Pusher from "pusher-js"
import axios from "./axios.js"
import { useState } from 'react';


function App() {
  const [message,setMessage]= useState([]); 
  useEffect(()=>{
      axios.get('/message/sync').then((response)=>
      {
        // console.log(response);
      setMessage(response.data);

      })
  },[])
useEffect( () => {
  
  const pusher = new Pusher('e0522f61094a45d2060f', {
    cluster: 'eu'
  });

      const channel = pusher.subscribe('messages');
      channel.bind('insert', function(newMessage) {
        setMessage([...message,newMessage])
        alert(JSON.stringify(newMessage));
      });
      return ()=>{
        channel.unbind_all();
        channel.unsubscribe();
      }
    
}, [message])
// console.log(message);
  return (
    <div className="app">
    <div className='app_body'>
     <Sidebar />
     <Chat message= {message}/>
     </div>
    </div>
  );
}

export default App;
