import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


function Tabella () {
    
    const [lista, setLista] = useState([])
    const location = useLocation()
    
    let listaAppoggio = []

    
    useEffect(() => {
        getListaPost()
        // eslint-disable-next-line
    }, [])

    const getListaPost = async () => { /* dichiaro che la funzione è asincrona */

        try{ /* ora le chiamate invece di gestirle con il then uso l'await e per catturare l'errore uso il try e catch */
        const response = await  axios.get('https://dummyjson.com/posts/user/' + location.state.id) /* uso await per far aspettare il programma in attesa di una risposta e mi restituirà la response */
        console.log(location.state.id)

            if(response.status === 200){

                listaAppoggio = [...response.data.posts]
                console.log(listaAppoggio)
                
            }

            setLista(listaAppoggio)
            console.log(lista)

        } catch (ex) {
            alert('Si è verificato un errore')
        }
        
    }

    return (
        <div>
            
            <table>
                
                    <tr>
                        <th>
                            Titolo
                        </th>
                        <th>
                            Body
                        </th>
                    </tr>
                    {lista.map(commenti =>
                        <tr>
                            <td>{commenti.title}</td>
                            <td>{commenti.body}</td>
                        </tr>
                    )}
            </table>

        </div> 
    )
}

export default Tabella