import { useContext } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { CustomContext } from "../Context"


const Carrello = () => {
    const history = useHistory()
    const context = useContext(CustomContext)

    const vaiAPagina = (route) => {
        history.push(route)
    }

    return(
        <>
            <h3>Carrello</h3>
            {context.carrello.map((prodotto, index) => (
                <p key={index}>{prodotto}</p>
            ))}
            <br/>
            <button onClick={(e) => {vaiAPagina('/home')}}>Indietro</button>
        </>
    )
}

export default Carrello