import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

function ListaSpesa () {

    const [lista, setLista] = useState([]); /* variabile di stato array devo inserire un array*/

    useEffect (() => {
        const listaTmp = [] /* creo un array */

        listaTmp.push({nome : 'Pasta', checked : false}) /* aggiungo all'array un oggetto con queste caratteristiche */
        listaTmp.push({nome : 'Pane', checked : false})
        listaTmp.push({nome : 'Latte', checked : false})
        listaTmp.push({nome : 'Verdura', checked : false})

        setLista(listaTmp) /* devo inserire all'interno di una variabile di stato un'array già completo */
    }, [])

    const setCheck = (e,i) => { /* arrow function */
        const listaVirtuale = [...lista] /* estraggo la lista */
        listaVirtuale[i] = {...listaVirtuale[i], checked : e} /* modifico la listaVirtuale associata ad un index, estraggo l'oggetto associato a quell'index e sovrascrivo il campo checked e lo riassocio all'indice */
        setLista(listaVirtuale) /* risetto la lista con una lista aggiornata dei suoi checked */
    } 

    return (
        <div>
            {lista.map((p,i) =>  <CheckBox  label={p.nome} 
                                            isChecked={p.checked} 
                                            index={i} 
                                            setCheck={setCheck}/>)} {/* creo un map che mi cicla la lista e assegna i suoi elemento a p e lo uso come un for-each */}
            
            <table>

                <tr>
                    <th>Indice</th>
                    <th>Alimento</th>
                </tr>

                {lista.map((p,i) =>
                    p.checked === true ? (
                <tr>
                    <td>{i}</td>
                    <td>{p.nome}</td>
                    <td>{p.quantita}</td>
                </tr>
                        ) : null
                    )
                }

            </table>
        </div>
    )
}

export default ListaSpesa;