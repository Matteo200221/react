import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { CustomContext } from "./Context"
import axios from "axios"


function Login () {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const history = useHistory()

    const context = useContext(CustomContext) /* uso un hook chiamato useContext così posso riprendermi il mio context specificando il context che voglio utilizzare nel mio caso CustomContext */

    const accesso = async (route) => {

        try{
            
            let response = await axios.post('https://dummyjson.com/auth/login', {

                username,
                password

            })

            console.log(response)

            if(response.status === 200) {

                
                context.setUtente({ nome    : response.data.firstName, 
                                    cognome : response.data.lastName })
                history.push(route)
                console.log(context.utente)
            }

            
        } catch (ex) {
            
            alert('Dati errati')
        }
        
    }

    return(

        <div>

            <p>Username: </p>

            <input type="text" onChange={(e) => setUsername(e.target.value)}/>

            <br/>

            <p>Password: </p>

            <input type="password" onChange={(e) => setPassword(e.target.value)}/>

            <br/>

            <button onClick={() => accesso('/home')}>Accesso</button>

        </div>

    )
}

export default Login