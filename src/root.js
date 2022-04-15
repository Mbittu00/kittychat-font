import {
  Routes,
  Route,
} from "react-router-dom";
import User from'./page/user/user'
import Chat from'./page/chat/chat'
import {useState,useEffect}from'react'
function Root() {
  let [name,setName]=useState(localStorage.getItem('name'))
  return (
     <Routes>
     {name?
    <Route path="/" element={<Chat />}/>
   :
   <Route path="/" 
   element={<User name={setName} />}/>  }
    </Routes>
  );
}

export default Root;
