import { useState, useEffect } from 'react';

import './App.css'

const ShowTurns = ({ turn }) => {
  return(
    <div>
      <h1>{turn}</h1>
      <p>Voltas</p>
    </div>
  )
}

const ShowTime = ({ time }) => {
  const count = time;
  const min = Math.round(time/60);
  const sec = time%60;
  
  return(
    <div>
      <h2>{`${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`}</h2>
      <p>Minutos por voltas</p>
    </div>
  )
}

const Button = ({ value, onClick }) => <button onClick={onClick}>{value}</button>

export default function App() {
  const [turns, setTurns] = useState(0)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState (false)

  const increment = () => {
    setTurns(turns+1);
  };

  const decrement = () => {
    setTurns(turns-1);
  };
  
  const toggleRunning = () => {
    setRunning(!running);
  }

  const reset = () => {
    setTurns(0);
    setTime(0);
  }

  useEffect(()=>{
    console.log(running)
    let timer = setInterval(()=>{
      if(running){
        setTime(old => old+1)
      }
    },100);
    return ()=>{
        clearInterval(timer);
    }
  },[running])

  return (
    <main>
      <ShowTurns turn={turns}/>
      <Button value={'+'} onClick={increment} />
      <Button value={'-'} onClick={decrement} />
      <ShowTime time={turns>0?Math.round(time/turns):time}/>
      <Button value={time?(running?'Pausar':'Continuar'):'Iniciar'} onClick={toggleRunning}/>
      <Button value={'Reiniciar'} onClick={reset}/>
    </main>
  )
}
