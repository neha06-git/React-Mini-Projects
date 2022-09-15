import React,{useState} from 'react';
function App() {
  const [tempVal,setTempVal]=useState(0);
  const [tempValColor, setTempValColor]=useState("cold");
  const increasetempVal = () => {
    if (tempVal === 32) return;
    const newTempVal = tempVal+1;
    setTempVal(newTempVal);
    if(newTempVal>=15){
      setTempValColor('hot');
    }
  };
  const decreasetempVal = () => {
    if (tempVal === 0) return;
    const newTempVal = tempVal-1;
    setTempVal(newTempVal);
    if(newTempVal<20){
      setTempValColor('cold');
    }
  };
  
  return (
    <div className="container">
       <h1>Temperature Control App</h1>
      
       <div className="box">
        <div className={`card ${tempValColor}`}>
          {tempVal}°C
        </div>
      </div>
     <div className='button-box'>
        <button onClick={increasetempVal}>+</button>
        <button onClick={decreasetempVal}>-</button>
        </div>
      </div>
    
  );
}

export default App;
