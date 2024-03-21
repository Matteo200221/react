import axios from "axios";
import { useState } from "react"
import { useHistory } from "react-router-dom";


function Login () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const accesso = () => {

        axios.post('https://dummyjson.com/auth/login',{
            
            username : username,
            password : password

        }).then( (response) => {

                console.log(response.data.id)
                history.push('/tabella', { id : response.data.id})

        }).catch( () => {

            alert('Dati errati')
        })
    }

    return(
        <div>

            <label>Username:</label>

            <br/>

            <input type="text" onChange={(e) => setUsername(e.target.value)}/>

            <br/>
            <br/>

            <label>Password:</label>

            <br/>

            <input type="password" onChange={(e) => setPassword(e.target.value)}/>

            <br/>
            <br/>

            <button className="button button-green border-radius-50" onClick={() => accesso()}>
                Accedi
            </button>
        </div>
    )
}

export default Login