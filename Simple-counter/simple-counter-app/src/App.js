import { useState } from 'react';
import './App.css';

//functional components
function App() {
  const[counter, setCounter] = useState(0);
  return (

    <div className="App">
     <div className='container'>
    <center>
     <div className='box'>
     <h1 className='headline'>Simple counting App</h1>
     <div className='card'>
      <h2 className='count'>{counter}</h2>
     <button onClick={()=>setCounter(counter+1)} >Increment</button>
     <button onClick={()=>setCounter(counter-1)}>Decrement</button>
     <button onClick={()=>setCounter(0)} disabled={counter===0}>Reset</button>
     </div>
     </div>
     </center>
     </div>
    </div>
  );
}

export default App;
