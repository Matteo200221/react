import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App= () => {

  const [x, setX] = useState(1)
  const [isLoading, setIsLoading] = useState(false) //quando viene cambiato non viene reinderizzata la pagina e si modifica tramite il set loading.

  const handleClick = () => {
    setX(x + 1)
    console.log(x)
  }

  useEffect(() => { //questo è un hook e funziona nel momento in cui il componente app.js viene montato una volta montato si avvia questa hook e il return si avvera nel momento in cui viene smontata la hook.
    console.log("Mount")
    return () => {

    }
  }, [x])

  const fetchPokemon = async () => { // questa è una funizione fetch e la usiamo per chiamare un servizio rest.
    try{
    setIsLoading(true)
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1") // assegniamo alla costante response la chiamata al servizio rest.
    setIsLoading(false)
    console.log(response.json())// stampiamo il get del servizio rest come json.
    } catch (e) {
      console.log("Errore", e)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={fetchPokemon}>Cliccami</button>
      </header>
    </div>
  );
}

export default App;
