import contxt from'./contxt'
import {useEffect,useState}from'react';
export default function Context(props) {
  let [count,setCount]=useState(0)
  return(
    <contxt.Provider value={{
      count,setCount
    }}>
    {props.children}
    </contxt.Provider>
    )
}