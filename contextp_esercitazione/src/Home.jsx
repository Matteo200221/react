import { useContext } from "react"
import { CustomContext } from "./Context"
import Prodotti from "./Prodotti"


function Home () {

    const contex = useContext(CustomContext)

    console.log(contex.utente)

    return(

        <div>
            <h1>Benvenuto {contex.utente.nome} {contex.utente.cognome}</h1>

            <br/>

            <Prodotti/>
        </div>
    )

}

export default Home