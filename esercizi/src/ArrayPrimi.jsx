import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ArrayPrimi() {

  const [arrayNuovo, setArrayNuovo] = useState([]);
  const [numero, setNumero] = useState(0);

  const history = useHistory()

  const calcola = () => {

    const arrayAppoggio = [];
    
    for (let i = 2; i <= numero; i++) { /* creo un ciclo che parte da 2 e ciclia fino al numero digitato */
      let contatore = 0;

      for (let j = 2; j <= i; j++) { /* creo un secondo ciclo che cicla per la lunghezza di i */
        if (i % j === 0) { /* creo un if che confronta i numeri di i se sono divisibili per j se lo è solo 1 allora è un numero primo sennò no */
          contatore++;
        }
      }

      if (contatore === 1) {
        arrayAppoggio.push(i)
      }
    }

    setArrayNuovo(arrayAppoggio)
  };

  return (
    <div>
      <h1>Calcolo i numeri primi fino al numero dato</h1>

      <input type="number" onChange={(e) => setNumero(e.target.value)} />

      <br />

      <p>Numeri primi: {arrayNuovo.join(", ")}</p>

      <br />

      <button onClick={() => calcola()}>Calcola</button>

      <br />

      <button onClick={() => history.push('/')}>Back</button>
    </div>
  );
}

export default ArrayPrimi;