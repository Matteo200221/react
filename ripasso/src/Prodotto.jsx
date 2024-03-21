function Prodotto ({setProdotto}) {

    return (
        <div>
            <label>Scelgiere un prodotto:</label>

            <br/>

            <select onChange={(e) => setProdotto(e.target.value)}>
                <option value="">--Perfavore scegliere un opzione--</option>
                <option value="Pasta">Pasta</option>
                <option value="Pane">Pane</option>
                <option value="Latte">Latte</option>
                <option value="Verdura">Verdura</option>
            </select>
        </div>
    )
}

export default Prodotto