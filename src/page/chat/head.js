
import './head.css';
import Pic from'../../img/happy.png'
function Head() {
  return (
    <div className="head">
        <h4 className='on'>2</h4>
    <h3 className='lc'>KittyChat</h3>
   <img src={Pic} className='dp'/>
    </div>
  );
}

export default Head;
