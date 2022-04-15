import './foot.css';
import Pic from'../../img/1.png'
import io from "socket.io-client";
import {useEffect,useState}from'react';
let socket;
function Foot() {
  let [text,setText]=useState('')
  useEffect(()=>{
  socket=io('https://kittyback.herokuapp.com/')

  },[])
  
  let send=()=>{
    let username=localStorage.getItem('name')
  socket.emit('msg',{username,text})
  setText('')
  }
  return (
    <div className="foot">
    <div className='ft'>
 <textarea type='text' className='msg' 
 onChange={(e)=>{setText(e.target.value)}}
 value={text}
 onFocus={()=>{
   window.scrollTo(-300,document.body.scrollHeight)
 }}
 spellcheck="false"/>
<img src={Pic} className='send' 
onClick={send}/>
</div>
    </div>
  );
}

export default Foot;
    