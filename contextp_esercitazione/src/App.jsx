import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { CustomContext } from './Context'; /* Importo il context */
import { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Carrello from './Carrello';

function App() {

  const [utente, setUtente] = useState({ nome : '',
                                      cognome : ''})

  const [carrello, setCarrello] = useState([])

  const contextValue = {utente, setUtente, carrello, setCarrello}

  return (
   <div>

    <header>

      <h1>Spesa Express</h1>

    </header>

    <div>

      <CustomContext.Provider value={contextValue}> {/* Tramite questo tag rappresento il context e ogni volta che assegnerò un valore al context tutti gli elementi filgi ne avranno accesso */} 

        <BrowserRouter>

          <Switch>

            <Route exact path='/'>
              <Login/>
            </Route>

            <Route exact path='/home'>
              <Home/>
            </Route>

            <Route exact path='/carrello'>
             <Carrello/>
            </Route>

          </Switch>

        </BrowserRouter>

      </CustomContext.Provider>

    </div>

    <footer>

      <h2>Sviluppato da @Matteo</h2>

    </footer>

   </div>
  );
}

export default App;
