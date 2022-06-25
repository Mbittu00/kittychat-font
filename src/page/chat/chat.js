import './Chat.css';
import Head from'./head'
import Foot from'./foot'
import Msg from'./msg'
import io from "socket.io-client";
import {useEffect,useState,useRef,useContext}from'react';
import context from'../context/contxt'
let socket;
function Chat() {
  let api=useContext(context)
  let [msg,setMsg]=useState([])
  let [online,setOnline]=useState(false)
  
  
  let [uname,setUname]=useState(localStorage.getItem('name'))
  //chake username
  useEffect(()=>{
 setUname(localStorage.getItem('name'))   
  },[api.count])
  //set all save msg
  useEffect(()=>{
let gop=localStorage.getItem('msg')
if (gop) {
  let js=JSON.parse(gop)
  setMsg(js)
}else{
  setMsg([])
}
  },[api.count])
  useEffect(()=>{
  socket=io('https://kittyback.herokuapp.com/')
  
  socket.on('online',(res)=>{
setOnline(res)
  })
  
  socket.emit('join',uname)
  
socket.on('show',(res)=>{
  setMsg(old=>[...old,res])
});
  },[])
  
//save
useEffect(()=>{
  let gop=localStorage.getItem('chake')
  let js=JSON.parse(gop)
  if (js) {
    localStorage.setItem('msg',JSON.stringify(msg))
  }else{
    
  }
},[msg])
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
