import { useState } from "react"
import { useHistory } from "react-router-dom"


function StringaCentrale () {

    const [stringa, setStringa] = useState('')
    const [risultato, setRisultato] = useState('')

    const history = useHistory()

    const creaStringa = () => {

        if(stringa.length >= 3 && stringa.length % 2 !== 0) {

                let lati = stringa.length - 3 /* prendo la lunghezza totale della parola e levo quello che devo tenere in questo modo mi rimane il numero dei lati cioè la parte da eliminare*/
                let numeroCaratteriLati = lati / 2  /* divido per 2 perchè così ottengo il numero di caratteri all'inzio e alla fine della parola */
                setRisultato(stringa.slice(0+numeroCaratteriLati, 3+numeroCaratteriLati)) /* divido la stringa dall'inzio saltando i primi caratteri che non voglio e la tengo fino ai caratteri che mi servono */

        }

    }

    return(
        <div>
            <h1>Creo una stringa con solo i 3 caratteri centrali di una stringa dispari</h1>

            <input type="text" onChange={(e) => setStringa(e.target.value)}/>

            <br/>

            <p>{risultato}</p>

            <button onClick={() => creaStringa()}>Crea</button>

            <br/>

            <button onClick={() => history.push('/')}>Back</button>



        </div>
    )

}

export default StringaCentrale