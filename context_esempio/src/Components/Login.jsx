import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { CustomContext } from "../Context"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const user = useContext(CustomContext)

    const login = async (route) => {
        if(username !== '' && password !== ''){
            try{
                var response = await axios.post('https://dummyjson.com/auth/login', {
                    username,
                    password
                })
                console.log(response)
                if(response.status === 200){
                    user.setFirstName(response.data.firstName)
                    user.setLastName(response.data.lastName)
                    history.push(route)
                }
            } catch(e) {
                alert('errore')
                console.log(e)
            }
        } else {
            alert('campi vuoti')
        }
    }

    return(
        <>
            <h3>Login</h3>
            <label>Username: </label>
            <input type="text" onChange={(e) => setUsername(e.target.value)}/>
            <br/>
            <label>Password: </label>
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button onClick={(e) => {login('/home')}}>Invio</button>
        </>
    )
}

export default Login