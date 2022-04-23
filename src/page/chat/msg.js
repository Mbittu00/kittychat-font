
import './msg.css';

function Msg({own,uname,msg,base}) {
  return (
    <div className='der'>
    <div className={own?'own':'mog'}>
   {base?<img src={base} className='simg'/>: <p className='txt'>{msg}</p>
   }
    <p className='hole'>{uname}</p>
    </div>
    </div>
  );
}

export default Msg;
