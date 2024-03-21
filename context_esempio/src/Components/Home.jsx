import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { CustomContext } from "../Context"


const Home = () => {
    const [prodotto, setProdotto] = useState('')
    const prodotti = ['pane', 'acqua', 'pasta', 'patate', 'carne', 'pesce', 'uova', 'formaggio', 'fagioli', 'frutta', 'verdura']
    const history = useHistory()
    const user = useContext(CustomContext)
    var contatore = user.carrello.length

    const aggiungiProdotto = () => {
        var carrelloAppoggio = [...user.carrello]
        carrelloAppoggio.push(prodotto)
        user.setCarrello(carrelloAppoggio)
    }

    const vaiAPagina = (route) => {
        history.push(route)
    }

    return(
        <>
            <h3>Benvenuto/a {user.firstName} {user.lastName} 
            <button onClick={(e) => {vaiAPagina('/carrello')}}>Carrello</button></h3>
            <label>Prodotti:</label>
            <br/>
            <select onChange={(e) => setProdotto(e.target.value)}>
                <option></option> 
                {prodotti.map((prodotto, index) => (
                    <option key={index} value={prodotto}>{prodotto}</option>
                ))}
            </select>
            <button onClick={(e) => {aggiungiProdotto(e)}}>+</button>
            <br></br>
            <p>totale prodotti: {contatore}</p>
            <button onClick={(e) => {vaiAPagina('/')}}>Indietro</button>
        </>
    )
}

export default Home