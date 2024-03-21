import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import ListaSpesa from "./ListaSpesa";

function App2 () {

    const [contatore, setContatore] = useState(0);
    const [numero, setNumero] = useState(0);
    const [check, setCheck] = useState(false);

    useEffect (() => { /* useEffect si avvera durante l'aggiornamento del suo parametro */
        console.log(contatore);
    }, [contatore])

    useEffect (() => {
        if(check === true) {
            setNumero(1)
        }
    }, [check])

    return (
        <div>

            Valore: {contatore}
            
            <br/>
            
            <button onClick={() => setContatore(contatore + 1)}>+</button>

            <br/>

            <button onClick={() => setContatore(contatore - 1)}>-</button>

            <br/>

            <input  type="number" 
                    disabled={check} 
                    value={numero} 
                    onChange={(e) => setNumero(+e.target.value)}/> {/* inserisco un + davanti a e.target.value perchè essendo un text setNumero inserisce una stringa se metto un + davanti trasforma la stringa in number, se avessi messo type number non ci sarebbe stato alcun problema */}
            
            <button onClick={() => setContatore(contatore + numero)}>aumento</button> 
            <button onClick={() => setContatore(contatore - numero)}>decrementa</button>
            
            <br/>
            
            <CheckBox setCheck={setCheck} label="disabilita"/>
            
            <ListaSpesa/>
        </div>
    );
}

export default App2;