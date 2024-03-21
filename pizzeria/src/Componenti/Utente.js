import { Link } from "react-router-dom"



function Utente ({utente, setUtente}) {

    const cancel = async () => {

        const response = await fetch('http://127.0.0.1:8080/PizzeriaRest/rest/utenteRest/utenteDelete/' + utente.email, { method: 'DELETE' })

        console.log(response)
        if(response.status === 204) {
            setUtente(null)
        }
        
    }


    return(

        <div>
            <label>Nome</label>
            
            <br/>

            <label>{utente.nome}</label>

            <br/>
            <br/>

            <label>Cognome</label>
            
            <br/>

            <label>{utente.cognome}</label>

            <br/>
            <br/>

            <label>Telefono</label>

            <br/>

            <label>{utente.telefono}</label>

            <br/>
            <br/>

            <label>Email</label>
            
            <br/>

            <label>{utente.email}</label>

            
            <br/>
            <br/>

            <Link to='/'>
                <button className="button button-red border-radius-50" onClick={() => cancel()}>Delete</button>
            </Link>

            <br/>

            <Link to='/'>
                <button className="button button-red border-radius-50" onClick={() => setUtente(null)}>Logout</button>
            </Link>

            <br/>

            <Link to='/'>
                <button className="button button-green border-radius-50">Back</button>
            </Link>

        </div>
    )
}

export default Utente