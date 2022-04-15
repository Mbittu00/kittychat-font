
import './msg.css';

function Msg({own,uname,msg}) {
  return (
    <div className='der'>
    <div className={own?'own':'mog'}>
    <p className='txt'>{msg}</p>
    <p className='hole'>{uname}</p>
    </div>
    </div>
  );
}

export default Msg;
