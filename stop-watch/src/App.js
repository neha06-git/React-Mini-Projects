import './App.css';
import React, { useState, useRef } from 'react';


function App() {
  const [timer, setTimer] = useState(3595)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }
  return (
    <div className="App">
      
      <div className='container mx-auto p-5  text-center'>
      <h1 className='font-sans md:font-serif text-2xl text-dark-grey justify-center'>React Stop Watch</h1>
      <div className="container p-8 mt-10 max-h-80 w-60  mx-auto bg-gradient-lightblue rounded text-center" >
      <p className='font-sans md:font-serif text-xl text-dark-grey justify-center mb-4' >{formatTime()}</p>
        <div className="card">
        {
            !isActive && !isPaused ?
              <button className="bg-dark-grey hover:light-grey text-white font-bold py-2 px-4 rounded-full m-3 ml-0"
              onClick={handleStart}>Start</button>
              : (
                isPaused ? <button className="bg-dark-grey hover:light-grey text-white font-bold py-2 px-4 rounded-full m-3 ml-0"
                onClick={handlePause}>Stop</button> :
                  <button className="bg-dark-grey hover:light-grey text-white font-bold py-2 px-4 rounded-full m-3 ml-0"
                  onClick={handleResume}>Resume</button>
              )
          }
          <button className="bg-dark-grey hover:light-grey text-white font-bold py-2 px-4 rounded-full m-3 ml-0"
          onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
