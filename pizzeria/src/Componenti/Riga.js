
function Riga({prodotto, indice, rimuovi}) {

    return (
        <div className="riga">
            <table className="centerTable">
                <tbody>
                     <tr key={prodotto.id}>
                        <td>{prodotto.prodotto}</td>
                        <td>{prodotto.costo}€</td>
                        <td>
                        <img src={prodotto.immagine} alt="" height={100} width={125}></img>
                        </td>
                        <td><button type="button" className="button button-green border-radius-50" onClick={() => rimuovi(indice)}>-</button></td>
                    </tr>
                        
                    
                </tbody>
                {/* <p>{prodotto.prodotto}</p>
                <p>{prodotto.costo}€</p>
                <img src={prodotto.immagine} alt="" height={100} width={125}/>   
                <button type="button" onClick={() => rimuovi(indice)}>-</button> */}
            </table>
        </div>
    )
}

export default Riga;