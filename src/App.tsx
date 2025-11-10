import { useRef, useState } from 'react'
import './App.css'


function App() {

  const[time, setTime] = useState(0)
  const[isRunning, setIsRunning] = useState(false)
  const timerRef = useRef(Number(0))

  const formatTime = (time: number) => {
  
  const getmillisec = `0${time%1000}`.slice(-2)

  const sec = Math.floor(time/1000)
  const getsec = `0${sec%60}`.slice(-2)

  const min = Math.floor(sec/60)
  const getmin = `0${min%60}`.slice(-2)

  return `${getmin} : ${getsec} : ${getmillisec}`
} 

  const handleToggle = () => {

    if(isRunning){
        clearInterval(timerRef.current)
        setIsRunning(false)
    }

    else{
      setIsRunning(true)
      const startTime = Date.now() - time
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime )
      }, 100)
    }
  }

  const ResetTimer = () => {
    clearInterval(timerRef.current)
    setIsRunning(false)
    setTime(0)
  }  


  return (
    <>

    <div className='container'>
      <div className='stopwatch'>  
        <h1>StopWatch</h1>
        
        <h2>{formatTime(time)}</h2>

      <div className='buttons'>
      <button onClick={handleToggle}> {isRunning ? 'Pause' : 'Start'} </button>

        <button onClick={ResetTimer}>Reset</button>

      </div>
      </div>
    </div>

    </>
  )
}

export default App
