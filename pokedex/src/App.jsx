import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './Table.css';
import Home from './componenti/Home';
import Pokedex from './componenti/Pokedex';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>POKEDEX</h2>
      </header>
      <div className='App-body'>
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/pokedex">
              <Pokedex />
            </Route>
            
          </Switch>
        </BrowserRouter>
      </div>
      <footer className='App-footer'>
        <h4>Developed by @Exolab</h4>
      </footer>
    </div>
  );
}

export default App;
