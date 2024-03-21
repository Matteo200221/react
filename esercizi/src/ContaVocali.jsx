import { useState } from "react"
import { useHistory } from "react-router-dom"


function ContaVocali () {

    const [stringa, setStringa] = useState('')
    const [numeroVocali, setNumeroVocali] = useState()

    const history = useHistory()

    const calcola = () => {

        let appoggio = 0

        for(let i = 0; i < stringa.length; i++) {

            if( stringa.charAt(i) === 'a' || 
                stringa.charAt(i) === 'e' ||
                stringa.charAt(i) === 'i' ||
                stringa.charAt(i) === 'o' ||
                stringa.charAt(i) === 'u') {

                    appoggio += 1
                }
        }

        setNumeroVocali(appoggio)
    }

    return(

        <div>

            <h1>Conto le vocali in una stringa</h1>

            <input type="text" onChange={(e) => setStringa(e.target.value)}/>

            <p>{numeroVocali}</p>

            <button onClick={() => calcola()}>Calcola</button>

            <br/>

            <button onClick={() => history.push('/')}>Back</button>

        </div>
    )
}

export default ContaVocali