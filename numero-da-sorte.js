import { useState } from 'react';
import "./styles.css";

export default function App() {
  const [gameState, setGameState] = useState ('entrada')
  const [secretNumber, setSecretNumber] = useState (Math.round(Math.random()*300))
  const [attempNumber, setAttempNumber] = useState (Math.round(Math.random()*300))
  const [minAttemp, setMinAttemp] = useState (0)
  const [maxAttemp, setMaxAttemp] = useState (300)
  const [attemps, setAttemps] = useState(1)
  
  const startGame = () => {
    setGameState('rodando')
    setSecretNumber(Math.round(Math.random()*300))
    setAttempNumber(Math.round(Math.random()*300))
    setMinAttemp(0)
    setMaxAttemp(300)
    SetAttemps(1)
    }
  
  const lesser = () => {
    setAttemps(attemps +1)
    setMaxAttemp(attempNumber)
    const nextAttemp = parseInt((attempNumber - minAttemp) / 2 + minAttemp)
    setAttempNumber(nextAttemp)
    }

  const bigger = () => {
    setAttemps(attemps +1)
    setMinAttemp(attempNumber)
    const nextAttemp = parseInt((maxAttemp - attempNumber)/2 + attempNumber)
    setAttempNumber(nextAttemp)
    }
  if(gameState === 'entrada'){
    return (
      <div>
        <button onClick={startGame}>
          Começar jogo
        </button>
      </div>
    )
  }
  if(attempNumber === secretNumber){
    if(attemps === 1){
      return(
        <div>
          <h1>Parabéns! Acertamos de PRIMEIRA!!!</h1>
          <button onClick={startGame}>Jogar novamente</button>
        </div>
      )
     }
    return(
      <div>
        <h1> Parabéns! acertamos!!!</h1>
        <p> O numero era {attempNumber} e nós acertamos com {attemps} tentativas. </p>
        <button onClick={startGame} >Jogar novamente</button>
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>Encontre o numero secreto</h1>
      <p>Meu chute é <span>{attempNumber}</span> acertei?</p>
      <p>Chute Mínimo {minAttemp} / chute Máximo {maxAttemp}</p>
      <button onClick={lesser}>Menor</button>
      <button onClick={bigger}>Maior</button>
      <h2>O número secreto é {secretNumber}</h2>

    </div>
  );
