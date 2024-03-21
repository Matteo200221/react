import logo from './logo.svg';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";

import './App.css';
import PersonaAdd from './components/PersonaAdd';
import Persone from './components/Persone';
import {PersonaServiceList} from './services/PersonaServiceProvider';
import {useState} from 'react';

function App() {
	
  const [ persone, setPersone] = useState([]);	
  const onAfterPersonaAdd = ()  => {
	  
	  setPersone(PersonaServiceList());
	  
  } 	
  
  
  return (
     <BrowserRouter>
	     <Routes>
	     	  <Route path="/persona/add"  index element={<PersonaAdd onAfterSubmitCallback={onAfterPersonaAdd}/>} />         
	     	  <Route path="/persone" element={<Persone persone={persone}/> } />
		      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
