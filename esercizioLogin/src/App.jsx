import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Tabella from './Tabella';

function App() {

  return (
   <div className='App'>
      <header className='App-header'>
        
      </header>
      <div className='App-body'>
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Login/>
            </Route>

            <Route exact path="/tabella">
              <Tabella/>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
      <footer className='App-footer'>
        
      </footer>
      
   </div>
  );
}

export default App;
