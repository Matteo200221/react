import { useState } from "react"
import { useHistory } from "react-router-dom"


function ConvertiOrario () {

    const [numero, setNumero] = useState()
    const [ore, setOre] = useState()
    const [minuti, setMinuti] = useState()

    const history = useHistory()

    const converti = () => {

        let appoggioMinuti = Math.round((numero/60000)) /* conveto il numero da millisencondi a minuti facendo una divisione del numero in millisecondi con 1 minuto espresso in millisecondi e arrotondo per eccesso*/
        let appoggioOre = Math.floor(appoggioMinuti/60) /* converto i minuti in ore senza contare la , grazie a math floor*/
        appoggioMinuti -= appoggioOre * 60 /* sottraggo al totale dei minuti il numero dei minuti contenuto solo nelle ore ritrasformando le ore in minuti facendo * 60 */

        setOre(appoggioOre)
        setMinuti(appoggioMinuti)

       
    }

    return(
        <div>
            
            <h1>Converto un numero in ore e minuti</h1>

            <input type="number" onChange={(e) => setNumero(e.target.value)}/>

            <button onClick={() => converti()}>Converti</button>

            <p>{ore} : {minuti}</p>

            <button onClick={() => history.push('/')}>Back</button>
        </div>
    )
}

export default ConvertiOrario