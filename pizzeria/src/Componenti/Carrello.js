import Riga from "./Riga";
import { Link } from "react-router-dom";

function Carrello({carrello, rimuovi, utente, svuota}) {

    let appoggio = [...carrello];
    let totale = 0;
    let id = utente.id;
    for(let i = 0; i < appoggio?.length; i++) {
        totale += appoggio[i].costo;
    }
    console.log(totale);

    function creaOggetto() {
        let ordine = {
            utente: {
                id: id
            },
            tokenBancario: "SDASDAW5",
            stato: "In attesa di verifica",
            pagamento: "Carta",
            listaRigaOrdine: []
        }
        for(let i = 0; i < appoggio?.length; i++) {
            let riga = {
                menu: {
                    id: appoggio[i].id
                }
            }
            ordine.listaRigaOrdine.push(riga)
        }
        inviaPagamento(ordine);

    }

    const inviaPagamento = async (ordine) => {
        const response = await fetch("http://127.0.0.1:8080/PizzeriaRest/rest/ordineRest/OrdineInsert", {
            method: 'POST',
            body: JSON.stringify(ordine),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(response.status === 201) {
            console.log("operazione riuscita")
            alert("Ordine inserito");
            svuota();
        }
    }

    return (
        <div className="contenitoreRighe">
          
            {appoggio && appoggio?.map((prodotti) => (
                <Riga key={appoggio.indexOf(prodotti)} prodotto={prodotti} indice={appoggio.indexOf(prodotti)} rimuovi={rimuovi}/>
                ))
            }
            <p style={{textAlign: "center"}}>Totale: {totale} €</p>
            <Link to="/">
                <button className="button button-green border-radius-50" onClick={creaOggetto}>Paga</button>
            </Link><br/>

            <Link to="/">
                <button className="button button-green border-radius-50">Back</button>
            </Link>

        </div>
    )
}

export default Carrello;