import './Chat.css';
import Head from'./head'
import Foot from'./foot'
import Msg from'./msg'
import io from "socket.io-client";
import {useEffect,useState,useRef}from'react';

let socket;
function Chat() {
  
  let [msg,setMsg]=useState([])
  let [uname,setUname]=useState(localStorage.getItem('name'))
  useEffect(()=>{
  socket=io('https://kittyback.herokuapp.com/')
  
  socket.emit('join',uname)
  
socket.on('show',(res)=>{
  setMsg(res)
})
  },[])
  return (
    <div className="Chat">
    <Head/>

    <div className='body' >
{
  msg.map((e,i)=>{
    return <Msg 
    own={uname==e.username?true:false}
    msg={e.text} uname={e.username}/>
  })
}
<div className='mb'></div>
    </div>

    <Foot/>
    </div>
  );
}

export default Chat;
