import './Chat.css';
import Head from'./head'
import Foot from'./foot'
import Msg from'./msg'
import io from "socket.io-client";
import {useEffect,useState,useRef}from'react';

let socket;
function Chat() {
  
  let [msg,setMsg]=useState([])
  let [online,setOnline]=useState(false)
  
  
  let [uname,setUname]=useState(localStorage.getItem('name'))
  useEffect(()=>{
  socket=io('http://localhost:3030')
  
  socket.on('online',(res)=>{
setOnline(res)
  })
  
  socket.emit('join',uname)
  
socket.on('show',(res)=>{
  setMsg(res)
  console.log(res)
});
  },[])
  return (
    <>
{
  online?
  <div className="Chat">
    <Head/>

    <div className='body' >
{
  msg.map((e,i)=>{
    return <Msg key={i}
    own={uname==e.username?true:false}
    msg={e.text} base={e.base} uname={e.username}/>
  })
}
<div className='mb'></div>
    </div>

    <Foot/>
    </div> :
    <div className='lodeh'>
    <div className='lode'></div>
    <p>loading...</p>
    </div>
}
</>
  );
}

export default Chat;
