
import './user.css';
import {useState}from'react'
function User({name}) {
  let [text,setText]=useState('')
  let setName=()=>{
    name(text)
    localStorage.setItem('name',text)
  }
  return (
    <div className='main'>
    <div className="user">
    <p className='join-text'>please enter your <br/>name for enjoy the chat</p>
    <input type='text' className='name'
    placeholder='Enter your name'
    onChange={(e)=>{setText(e.target.value)}}
    value={text}/>
    <button className='join' onClick={setName}>Join</button>
    </div>
    </div>
  );
}

export default User;
