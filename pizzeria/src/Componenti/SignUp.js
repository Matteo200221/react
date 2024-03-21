import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp () {

    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [sesso, setSesso] = useState('');
    const [via, setVia] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function creaUtente () {
        let nuovoUtente = {
            nome: nome,
            cognome: cognome,
            sesso: sesso,
            via: via,
            telefono: telefono,
            email: email,
            password: password
        }
        inserisciUtente(nuovoUtente);
    }

    const inserisciUtente = async (nuovoUtente) => {
        const response = await fetch("http://127.0.0.1:8080/PizzeriaRest/rest/utenteRest/utenteInsert", {
            method: 'POST',
            body: JSON.stringify(nuovoUtente),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(response.status === 201) {
            console.log("operazione riuscita")
        }
    }

    return (
        
        <div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <label>Nome</label><br/>
            <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}/><br/>
            <label>Cognome</label><br/>
            <input type="text" name="cognome" value={cognome} onChange={(e) => setCognome(e.target.value)}/><br/>
            <label>Sesso</label><br/>
            <select name="scelta" value={sesso} onChange={(e) => setSesso(e.target.value)}>
                <option value="---">---</option>
                <option value="M">M</option>
                <option value="F">F</option>
            </select><br/>
            <label>Via</label><br/>
            <input type="text" name="via" value={via} onChange={(e) => setVia(e.target.value)}/><br/>
            <label>Telefono</label><br/>
            <input type="text" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/><br/>
            <label>Email</label><br/>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label>Password</label><br/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <Link to="/">
            <button className="button button-green border-radius-50" onClick={creaUtente}>SignUp</button>
            </Link>
        </div>
    )
}

export default SignUp;