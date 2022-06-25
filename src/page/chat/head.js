
import './head.css';
import './db.css';
import Pic from'../../img/happy.png'
import {useState,useEffect}from'react'
function Head() {
  let [sty,setSty]=useState(false)
  let [value,setValue]=useState(false)
  //useEffect
  useEffect(()=>{
  let gop=localStorage.getItem('chake')
  let js=JSON.parse(gop)
  if (gop) {
    setValue(js)
  }else{
    setValue(true)
  }
  },[])
  //db
  let db=()=>{
    setSty(!sty)
  }
  //chake
  let chake=(e)=>{
  localStorage.setItem('chake',e.target.checked)
  setValue(e.target.checked)
  }
  //clear
  let clear=()=>{
localStorage.setItem('msg','')
  }
  //change
  let change=()=>{
    let pro=prompt('enter your new name')
    if (pro) {
    localStorage.setItem('name',pro)  
    }else{
      alert('pleace enter name')
    }
  }
  return (
    <>
    <div className="head">
        <h4 className='on'>2</h4>
    <h3 className='lc'>KittyChat</h3>
   <img src={Pic} className='dp'
   onDoubleClick={db}/>
    </div>
    <div className='db' style={sty?{display:'flex'}:{display:'none'}}>
    <div className='box'>
    <p>Save Chat</p>
 <label className="toggler-wrapper style-1">
    <input type="checkbox" onChange={chake}
    checked={value}/>
    <div className="toggler-slider">
    <div className="toggler-knob"></div>
          </div>
        </label>
        </div>
    <button onClick={clear}>Clear Chat</button>
   <button onClick={change}>Change Name</button>
    </div>
    </>
  );
}

export default Head;
