import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Root from'./root'
import ScrollToBottom from 'react-scroll-to-bottom';
function App() {
  return (
        <ScrollToBottom mode='bottom' 
    initialScrollBehavior='smooth'>
    <div className="App">
    <BrowserRouter>
    <Root/>
    
    </BrowserRouter>
    </div>
        </ScrollToBottom>
  );
}

export default App;
