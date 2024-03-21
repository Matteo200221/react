import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Carrello from './Components/Carrello';
import { CustomContext } from './Context';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [carrello, setCarrello] = useState([])

  const contextValue = {firstName, setFirstName, lastName, setLastName, carrello, setCarrello}

  return (
    <div className="App">
      <header>
        <h1>Carrello context</h1>
      </header>
      <CustomContext.Provider value={contextValue}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path={'/'}>
                <Login />
              </Route>
              <Route exact path={'/home'}>
                <Home />
              </Route>
              <Route exact path={'/carrello'}>
                <Carrello />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </CustomContext.Provider>
      <footer>
        <h6>Sviluppato da Alessio</h6>
      </footer>
    </div>
  );
}

export default App;
