import contxt from'./contxt'
import {useEffect,useState}from'react';
import io from "socket.io-client";
let socket=io('http://10.146.12.71:8900') 
export default function Context(props) {
  let [online,setOnline]=useState([])
useEffect(()=>{
    socket.on('many',(res)=>{
    setOnline(res)
    })
  },[])
  let [count,setCount]=useState(0)
  return(
    <contxt.Provider value={{
      count,setCount,socket,online
    }}>
    {props.children}
    </contxt.Provider>
    )
}