import { useContext, useState } from "react"
import { CustomContext } from "./Context"
import { useHistory } from "react-router-dom"


function Prodotti () {

    const [lista, setLista] = useState([])
    const [prodotto, setProdotto] = useState('')

    const context = useContext(CustomContext)

    const history = useHistory()

    const articoli = ['pane', 'pizza', 'pasta', 'latte', 'biscotti', 'verdura', 'frutta', 'salumi']

    const riempiLista = () => {

        const listaAppoggio = [...context.carrello]

        listaAppoggio.push(prodotto)

        context.setCarrello(listaAppoggio)

        console.log(context.carrello)

    }

    return(

        <div>
            
            <select onChange={(e) => setProdotto(e.target.value)}>

                <option value=''>--Scegliere un prodotto--</option>

                {articoli.map((articolo, i) =>
                    
                    <option key={i} value={articolo}>{articolo}</option>    
                )}

            </select>

            <button onClick={() => riempiLista()}>Aggiungi</button>

            <br/>

            <button onClick={() => history.push('carrello')}>Carrello</button>

        </div>
    )
}

export default Prodotti