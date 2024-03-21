import { useHistory } from "react-router-dom"


function Homepage () {

    const history = useHistory()

    return(
        <div>
            
            <button onClick={() => history.push('/esercizio1')}>Esercizio 1</button>

            <br/>

            <button onClick={() => history.push('/esercizio2')}>Esercizio 2</button>

            <br/>

            <button onClick={() => history.push('/esercizio3')}>Esercizio 3</button>

            <br/>

            <button onClick={() => history.push('/esercizio4')}>Esercizio 4</button>

            <br/>

            <button onClick={() => history.push('/esercizio5')}>Esercizio 5</button>

            <br/>

            <button onClick={() => history.push('/esercizio6')}>Esercizio 6</button>

            <br/>

            <button onClick={() => history.push('/esercizio7')}>Esercizio 7</button>  

            <br/>

            <button onClick={() => history.push('/esercizio8')}>Esercizio 8</button> 

            <br/>

            <button onClick={() => history.push('/esercizio9')}>Esercizio 9</button> 

            <br/>

            <button onClick={() => history.push('/esercizio10')}>Esercizio 10</button>

        </div>
    )
}

export default Homepage