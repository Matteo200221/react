import { useState } from "react"
import { useHistory } from "react-router-dom"


function Maiuscole () {

    const [stringa, setStringa] = useState('')
    const [stringaNuova, setStringaNuova] = useState('')

    const history = useHistory()

    const elabora = () => {

        setStringaNuova(stringa.replace(/[A-Z]/g, 4))
        
    }

    return (

        <div>

            <h1>Cambio le maiuscole con un 4</h1>
            
            <input type="text" onChange={(e) => setStringa(e.target.value)}/>

            <br/>

            <p>{stringaNuova}</p>

            <br/>

            <button onClick={() => elabora()}>Elabora</button>

            <br/>

            <button onClick={() => history.push('/')}>Back</button>
        </div>
    )

}

export default Maiuscole