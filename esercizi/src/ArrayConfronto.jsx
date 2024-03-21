import { useState } from "react"
import { useHistory } from "react-router-dom"


function ArrayConfronto () {

    const [numeroMaggiore, setNumeroMaggiore] = useState()
    const [indice, setIndice] = useState()

    const history = useHistory()

    const array1 = [2, 7, 32, 82, 15]
    const array2 = [9, 15, 26, 58, 44]

    const confronta = () => {

        if(indice > 0 && indice < 6){
            
            if(array1[indice-1] > array2[indice-1]){

                setNumeroMaggiore(array1[indice-1])
            } else {

                setNumeroMaggiore(array2[indice-1])
            }

        } else {
            alert('Il numero digitato deve essere compreso tra 1 e 5')
        }

    }

    return(
        <div>
            
            <h1>Confronto 2 array di 5 interi e restituisco il numero maggiroe tra i 2</h1>

            <p>Digitare un numero tra 1 e 5</p>
            <input type="text" onChange={(e) => setIndice(e.target.value)}/>

            <br/>

            <p>{numeroMaggiore}</p>

            <button onClick={() => confronta()}>Controlla</button>

            <br/>

            <button onClick={() => history.push('/')}>Back</button>
        </div>
    )
}

export default ArrayConfronto