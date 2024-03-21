import { useState } from "react";
import { Link } from "react-router-dom";

function Login({onLogin}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const controlloCampi = (email, password) => {
        if(email === '' || password === ''){
            alert("Dati incompleti");
        } else {
            onLogin(email,password)
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <label>Accedi o Registrati</label><br/>
            <label>Email</label><br/>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label>Password</label><br/>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <p id="erroreCampi"></p><br/>
            <button className="button button-green border-radius-50" onClick={() =>controlloCampi(email, password)}> Accedi </button>
            <Link to="/SignUp">
            <button className="button button-green border-radius-50"> Registrati </button>
            </Link>
        </div>
    );
}

export default Login;