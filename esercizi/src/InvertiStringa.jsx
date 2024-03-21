import { useState } from "react"
import { useHistory } from "react-router-dom"


function InvertiStringa () {

    const [stringa, setStringa] = useState('')
    const [stringaInvertita, setStringaInvertita] = useState('')

    const history = useHistory()

    const inverti = () => {

        let appoggio = ''
        let contatore = 1

        for(let i = 0; i < stringa.length; i++, contatore++) {

            appoggio += stringa.charAt(stringa.length-contatore)
            console.log(appoggio)
        }

        setStringaInvertita(appoggio)
    }

    return(

        <div>
            <h1>Digita una parola e io la ivertirò</h1>

            <input type="text" onChange={(e) => setStringa(e.target.value)}/>

            <button onClick={() => inverti()}>Inverti</button>

            <p>{stringaInvertita}</p>

            <button onClick={() => history.push('/')}>Back</button>
        </div>
    )

}

export default InvertiStringa