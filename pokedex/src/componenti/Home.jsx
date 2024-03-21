import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()

    const vaiAPagina = (route) => { 
      history.push(route)
    }

    return (
        <>
            <h1>Home</h1>

            <br />

            <button className='button button-green border-radius-50' onClick={() => vaiAPagina('/pokedex')}>
                Pokedex
            </button>
        </>
    )
}

export default Home