import { useState } from "react"
import { useHistory } from "react-router-dom"


function ConcatenaStringhe () {

    const [stringaUno, setStringaUno] = useState('')
    const [stringaDue, setStringaDue] = useState('')
    const [stringaUnita, setStringaUnita] = useState('')

    const history = useHistory()

    const unisciStringa = () => {

        let stringaUnoAppoggio = stringaUno.slice(1, 2) + stringaUno.slice(3)

        let stringaDueAppoggio = stringaDue.slice(1, 2) + stringaDue.slice(3)

        setStringaUnita(stringaUnoAppoggio + stringaDueAppoggio)

        console.log(stringaUnoAppoggio)
        console.log(stringaDueAppoggio)
        console.log(stringaUnita)
    }

    return(
        <div>

            <h1>Concateno stringhe tranne il 1° e il 3° carattere</h1>

            <p>Stringa 1</p>

            <input type="text" onChange={(e) => setStringaUno(e.target.value)}/>

            <br/>

            <p>Stringa 2</p>

            <input type="text" onChange={(e) => setStringaDue(e.target.value)}/>

            <br/>

            <p>{stringaUnita}</p>

            <button onClick={() => unisciStringa()}>Unisci</button>

            <br/>
            
            <button onClick={() => history.push('/')}>Back</button>

        </div>
    )
}

export default ConcatenaStringhe