import React, {useState} from 'react';
import {PersonaServiceList} from '../services/PersonaServiceProvider';
import { Navigate } from "react-router-dom";
const Persone = (props) => {
	
	const [ goBack, setGoBack ] = useState(false);
	

	
	const _goBack = () => {
		
		setGoBack(true);
	}

	if(goBack){
        return (  <Navigate to="/persona/add" replace={true} />);
    }
	
	
	var persone = PersonaServiceList();
		 
	const result = persone.map((p, indice) =>
	// Fallo solo se gli elementi non hanno identificativi stabili
	<li key={indice}>
	  {p}
	</li>
	);
	
	
	return (
			<>
			<ul>{result}</ul>
			<a href="javascript:void(0);" onClick={_goBack}>Indietro</a>
			</>
			);
}


export default Persone;
