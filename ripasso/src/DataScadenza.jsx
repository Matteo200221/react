import moment from "moment"

function DataScadenza ({setDataScadenza}) {

    return(
        <div>
            <label>Data scadenza:</label>

            <br/>

            <input  type="date"
                    defaultValue={moment().format("YYYY-MM-DD")}
                    min="2024-01-01" 
                    max="2030-12-31"
                    onChange={(e) => setDataScadenza(e.target.value)}/>

        </div>
    )
}

export default DataScadenza