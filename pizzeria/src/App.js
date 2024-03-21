import './App.css';
import Login from './Componenti/Login.js';
import Homepage from './Componenti/Homepage.js';
import Carrello from './Componenti/Carrello.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Componenti/SignUp.js';
import Utente from './Componenti/Utente.js';

function App() {

  const [utente, setUtente] = useState(null);
  const [carrello, setCarrello] = useState([]);

  console.log("Questo è il carrello in state ", carrello);

  const controlloLogin = async (email, password) => {
    const response = await fetch("http://127.0.0.1:8080/PizzeriaRest/rest/utenteRest/getUtente/" + email + "/" + password)
    if(response.status === 200) {
       const utenteRisposta = await response.json();
       setUtente (() => utenteRisposta);
    } else if (response.status === 204){
      alert("Dati errati")
    }
  }

  const svuotaCarrello = () => {
    setCarrello([]);
  }

  const carrelloRiempimento = (prodotto) => {
    let virtualCarrello = [...carrello];
    virtualCarrello.push(prodotto);
    setCarrello(virtualCarrello);
  }

  const carrelloRimuoviProdotto = (indice) => {
    let virtualCarrello = [...carrello];
    virtualCarrello.splice(indice, 1);
    setCarrello(virtualCarrello); 
  }
  return (
    <>
      <header className='App-header'> 

        <p>Pizza a domicilio</p>

      </header>

      <body className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {(utente == null ? <Login onLogin= {controlloLogin}/> : <Homepage inserisciProdotto= {carrelloRiempimento}/>)}/>
            <Route path='/SignUp' element= {<SignUp/>}/>
            <Route path="/Carrello" element= {<Carrello carrello={carrello} rimuovi={carrelloRimuoviProdotto} utente={utente} svuota={svuotaCarrello}/>}/>
            <Route path='/Utente' element= {<Utente utente={utente} setUtente={setUtente}/>}/>
          </Routes>
        </BrowserRouter>
      </body>
      
      <footer className='App-footer'>
        <p>Developed by @Matteo</p>
      </footer>
    </>
  );
}

export default App;
