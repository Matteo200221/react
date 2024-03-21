import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import axios from 'axios'

// https://pokeapi.co/api/v2/pokemon
function Pokedex() {
    const [listaPokemon, setListaPokemon] = useState([])

    const history = useHistory()

    useEffect(() => {
        getListaPokemon()
    }, [])

    const getListaPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then( (response) => {
            console.log(response)

            if(response.status === 200){
                setListaPokemon(response.data.results)
            } else {
                alert('Si è verificato un errore')
            }
        })
    }
    
    const vaiAPagina = (route) => { 
      history.push(route)
    }

    return (
        <>
            <h1>Lista Pokemon</h1>

            { listaPokemon && listaPokemon.length > 0 ?
                <table id="tabellaSerie">
                    <thead>
                        <tr>
                            <th>Indice</th>
                            <th>Nome</th>
                            <th>Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaPokemon.map( (pokemon, index) =>
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{pokemon.name}</td>
                                    <td>
                                        <a href={pokemon.url}>
                                            {pokemon.url}
                                        </a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table> 
                : 
                <p>Nessun pokemon da mostrare</p>
            }

            <br />

            <button className="button button-green border-radius-50" onClick={() => vaiAPagina('/')}>
                Indietro
            </button>

            <br />
        </>
    )
}

export default Pokedex