import { useState } from 'react';
import './App.css';
import Prodotto from './Prodotto';
import Quantita from './Quantita';
import DataScadenza from './DataScadenza';
import moment from 'moment';

function App() {

  const [prodotto, setProdotto] = useState('')
  const [quantita, setQuantita] = useState(0)
  const [dataScadenza, setDataScadenza] = useState(new Date())
  const [lista, setLista] = useState([])
  console.log(prodotto)
  console.log(quantita)
  console.log(dataScadenza)
  console.log(lista)

  const riempiLista = () => {
    const listaVirtuale = [...lista]
    
    if(prodotto !== '' && quantita !== 0 && dataScadenza !== '') {

      const articolo = {prodotto      : prodotto,
                        quantita      : quantita,
                        dataScadenza  : dataScadenza
      }

        if(listaVirtuale.some(articoloLista => articolo.prodotto === articoloLista.prodotto)) {

          const articoloTemp = listaVirtuale.find(articoloLista => articolo.prodotto === articoloLista.prodotto)
          const index = listaVirtuale.indexOf(articoloTemp)
          listaVirtuale.splice(index, 1, articolo)

        } else {

          listaVirtuale.push(articolo)

        }

      setLista(listaVirtuale)

    } else {
      alert("Dati mancanti")
    }
  }

  const rimuoviRiga = (i) => {

    const listaVirtuale = [...lista]

    listaVirtuale.splice(i, 1)

    setLista(listaVirtuale)
  }

  const incrementa = (i, articolo) => {

    const listaVirtuale = [...lista]
    const articoloNuovo = {...articolo, 
                          quantita : +articolo.quantita + 1}
    listaVirtuale.splice(i, 1, articoloNuovo)
    setLista(listaVirtuale)
  }

  const decrementa = (i, articolo) => {

    const listaVirtuale = [...lista]
    if (+articolo.quantita > 1) {

      const articoloNuovo = {...articolo, quantita : +articolo.quantita - 1}
      listaVirtuale.splice(i, 1, articoloNuovo)

    } else {

      listaVirtuale.splice(i, 1)

    }
    setLista(listaVirtuale)
  }

  const getColor = (articolo) => {

    let colore

    if(moment(articolo.dataScadenza).isSame(moment().startOf('day'))){
      colore = "yellow"

    } else if(moment().isBefore(articolo.dataScadenza)){
      colore = "green"

    } else if(moment().isAfter(articolo.dataScadenza)){
      colore = "red"
    }
    return (
      colore
    )
  }

  return (
    <div className="App">
      <header>
        <h1>Aggiungi al carrello</h1>
      </header>

      <Prodotto setProdotto={setProdotto}/>
      
      <Quantita setQuantita={setQuantita}/>

      <DataScadenza setDataScadenza={setDataScadenza}/>

      <br/>

      <button onClick={riempiLista}>Aggiungi</button>

      <br/>

      {lista.length > 0 ? ( 
      <div style={{display      : 'flex', 
                  justifyContent: 'center'}}>
        <table>

          <tr>

            <th>Prodotto</th>
            <th>Quantità</th>
            <th>Scadenza</th>

          </tr>

          <tbody>
            {lista.map((articolo, i) =>
              <tr key={articolo.prodotto}>

                <td>
                  {articolo.prodotto}
                </td>
                <td>
                  <button onClick={(e) => decrementa(i, articolo)}>-</button>
                  {articolo.quantita} 
                  <button onClick={(e) => incrementa(i, articolo)}>+</button>
                </td>
                <td style={{color : getColor(articolo)}}>
                  {moment(articolo.dataScadenza).format("DD-MM-YYYY")}
                </td>

                <button onClick={(e) => rimuoviRiga(i)}>Rimuovi</button>

              </tr>
            )}
          </tbody>

        </table>


      </div>
      ) : <p>Nessun articolo inserito</p> }
    </div>
  );
}

export default App;
