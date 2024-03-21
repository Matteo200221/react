function Quantita ({setQuantita}) {

    return (
        <div>

            <label>Quantità</label>

            <br/>
            
            1<input type="radio" 
                    name="scelta" 
                    value={1} 
                    onClick={(e) => setQuantita(e.target.value)}/>

            <br/>

            2<input type="radio" 
                    name="scelta" 
                    value={2} 
                    onClick={(e) => setQuantita(e.target.value)}/>
            
            <br/>
            
            3<input type="radio" 
                    name="scelta" 
                    value={3} 
                    onClick={(e) => setQuantita(e.target.value)}/>
            
            <br/>
            
            4<input type="radio" 
                    name="scelta" 
                    value={4} 
                    onClick={(e) => setQuantita(e.target.value)}/>
            
            <br/>
            
            5<input type="radio" 
                    name="scelta" 
                    value={5} 
                    onClick={(e) => setQuantita(e.target.value)}/>
        </div>
    )
}

export default Quantita