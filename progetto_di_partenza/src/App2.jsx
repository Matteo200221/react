import { useState, useEffect } from "react"
import CustomCheckbox from "./CustomCheckbox"
import ListaSpesa from "./ListaSpesa"

const App2 = () => {
    const [count, setCount] = useState(0)
    const [quantita, setQuantita] = useState(0)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        console.log(count)
    }, [count])

    useEffect( () => {
        if(disabled === true){
            setQuantita(1)
        }
    }, [disabled])

    const incrementa = () => {
        setCount(count+quantita)
    }

    const decrementa = () => {
        setCount(count-quantita)
    }

    return (
        <div>
            Valore: {count}
            
            <br />

            inserisci valore per incrementare o decrementare:  

            <input  disabled={disabled} 
                    value={quantita} 
                    type="number" 
                    onChange={(e) => setQuantita(Number(e.target.value))} />

            <br />

            <button onClick={incrementa}> incrementa </button>
            <button onClick={decrementa}> decrementa </button>

            <br />

            <CustomCheckbox cambiaInput={setDisabled} testo="Disabilita" />

            <br />

            <ListaSpesa />
        </div>
    )
}

export default App2