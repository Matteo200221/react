import { useState } from "react"
import { useHistory } from "react-router-dom"


function CalcoloMultipo() {

    const [numero, setNumero] = useState()
    const [messaggio, setMessaggio] = useState('')

    const history = useHistory()

    const calcolo = () => {

        if(numero > 0) {

            if(numero % 3 === 0){

                setMessaggio('Multiplo di 3')

            } else if(numero % 7 === 0){

                setMessaggio('Multiplo di 7')
            } else {

                setMessaggio('Non è multiplo di 3 o 7')
            }

        } else {
            setMessaggio('Numero negativo')
        }

    }

    return(

        <div>
            <label>Digitare un numero e ti dirò se è multiplo di 3 o 7</label>

            <br/>

            <input type="number" onChange={(e) => setNumero(e.target.value)}/>

            <button onClick={() => calcolo()}>Calcola</button>

            <p>{messaggio}</p>

            <button onClick={() => history.push('/')}>Back</button>
        </div>
    )

}

export default CalcoloMultipo