import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CalcoloMultipo from './CalcoloMultipo';
import ContaData from './ContaData';
import Homepage from './Homepage';
import InvertiStringa from './InvertiStringa';
import ConvertiOrario from './ConvertiOrario';
import ContaVocali from './ContaVocali';
import ConcatenaStringhe from './ConcatenaStringhe';
import StringaCentrale from './StringaCentrale';
import ArrayConfronto from './ArrayConfronto';
import ArrayPrimi from './ArrayPrimi';
import Maiuscole from './Maiuscole';
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Homepage/>
          </Route>

          <Route exact path='/esercizio1'>
            <ContaData/>
          </Route>

          <Route exact path='/esercizio2'>
            <CalcoloMultipo/>
          </Route>

          <Route exact path='/esercizio3'>
            <InvertiStringa/>
          </Route>

          <Route exact path='/esercizio4'>
            <ConvertiOrario/>
          </Route>

          <Route exact path='/esercizio5'>
            <ContaVocali/>
          </Route>

          <Route exact path='/esercizio6'>
            <ConcatenaStringhe/>
          </Route>

          <Route exact path='/esercizio7'>
            <StringaCentrale/>
          </Route>

          <Route exact path='/esercizio8'>
            <ArrayConfronto/>
          </Route>

          <Route exact path='/esercizio9'>
            <ArrayPrimi/>
          </Route>

          <Route exact path='/esercizio10'>
            <Maiuscole/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
