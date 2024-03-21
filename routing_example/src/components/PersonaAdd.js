import React, {useState} from 'react';
import {PersonaServiceAdd} from '../services/PersonaServiceProvider';

import { Navigate } from "react-router-dom";

const PersonaAdd = ({onAfterSubmitCallback}) => {
	
	
	const [ redirect, setRedirect ] = useState(false);

	 
	const onFormClick = (e) => {
		e.preventDefault();
		var nome = e.currentTarget.elements.nome.value;
		
		PersonaServiceAdd(nome);
		//onAfterSubmitCallback();
		setRedirect(true);
		
		
	}
	
	if(redirect){
        return (  <Navigate to="/persone" replace={true} />);
    }
	
	return (
			<form onSubmit={onFormClick}>
			<label>Nome</label><br/>
			<input type="text" name="nome"/><br/>
			<input type="submit" value="Invia"/><br/>
			</form>
			);
}


export default PersonaAdd;
