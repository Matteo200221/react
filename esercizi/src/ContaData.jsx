import { useState } from "react"
import { useHistory } from "react-router-dom"

function ContaData () {

    const [risultato, setRisultato] = useState('')
    const history = useHistory()

    let giorno = 1000 * 60 * 60 * 24
    let oggi = new Date()
    let natale = new Date(oggi.getFullYear(), 11, 25)


    const calcoloData = () => {

        if(oggi.getMonth() === 11 && oggi.getDate() === 25) {
            natale.setFullYear(natale.getFullYear() + 1)
        }
        
        let calcolo = Math.round((natale.getTime()-oggi.getTime()) / giorno) /* con la sottrazione trovo la differenza di giorni tra natale e oggi in millisecondi ora devo convertirlo in giorni con una divisione con un numero che rappresenti un giorno espresso in millisecondi */  
        setRisultato(calcolo.toFixed(0))
    }

    console.log(risultato)
    
    return(
        <div>
            <h1>Calcolo i giorni che mancano a natale</h1>

            <button onClick={() => calcoloData()}>Conta</button>

            <p>{risultato}</p>

            <button onClick={() => history.push('/')}>Back</button>    
        </div>
    )
}

export default ContaData