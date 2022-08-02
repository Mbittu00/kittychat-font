import './foot.css';
import Pic from'../../img/1.png'
import act from'../../img/attachment.png'
import {useEffect,useState,useContext}from'react';
import context from'../context/contxt'
function Foot() {
  let {socket,count}=useContext(context)
  let [text,setText]=useState('')
  let [base,setBase]=useState('')
  
  
  
  let send=()=>{
    let username=localStorage.getItem('name')
  socket.emit('msg',{username,text})
  setText('')
  };
  
  let file=(e)=>{
    let bos;
   var file = e.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file); 
  reader.onloadend = function() {
    setBase(reader.result)
    bos=reader.result;
    //alert(reader.result)
    console.log(reader.result)
    let username=localStorage.getItem('name')
  socket.emit('file',{username,base:reader.result})
  //setText(reader.result)
  }
  
    
    
  
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
 spellCheck="false"/>
<label className='lab'>
 <img src={act} className='act'/>
<input type='file' className='file' accept="image/*" onChange={file}/>
</label>

<img src={Pic} className='send' 
onClick={send}/>

</div>
    </div>
  );
}

export default Foot;
    
