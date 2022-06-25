import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Root from'./root'
import ScrollToBottom from 'react-scroll-to-bottom';
import Context from'./page/context/context'
function App() {
  return (
        <ScrollToBottom mode='bottom' 
    initialScrollBehavior='smooth'>
    <div className="App">
    <BrowserRouter>
    <Context>
    <Root/>
    </Context>
    </BrowserRouter>
    </div>
        </ScrollToBottom>
  );
}

export default App;
