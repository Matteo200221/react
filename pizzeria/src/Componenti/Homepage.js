import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Sidebar } from 'flowbite-react';

function Homepage({inserisciProdotto}) {

    const [menu, setMenu] = useState([]);
    const listaMenu = async () => {
        const response = await fetch("http://127.0.0.1:8080/PizzeriaRest/rest/menuRest/getListaMenu/")
        const responseLista = await response.json();
        setMenu (() => responseLista);
    }

    function creaProdotto (id, nome, prezzo, immagine) {

        let prodotto = {id:id,
                        prodotto:nome,
                        costo:prezzo,
                        immagine:immagine};
        inserisciProdotto(prodotto)
    }

    useEffect(() => {
        listaMenu();
    }, []);
    
    return(

        <>

    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item>

            <Link to="/Utente">
            <button className="button button-green border-radius-50">
                
                <img src="https://static-00.iconduck.com/assets.00/profile-2-icon-256x256-bvh7xwyf.png" alt="" width="20" height="20" />
            
            </button>
            </Link>

          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
 










        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <table className="centerTable">
                <thead>
                    <tr>    
                        <th>Prodotto</th>
                        <th>Costo</th>
                        <th>immagine</th>
                    </tr>
                </thead>
                <tbody>
                    {menu?.map((prodotti) => (
                        <tr key={prodotti.id}>
                            <td>{prodotti.prodotto}</td>
                            <td>{prodotti.costo}€</td>
                            <td>
                            <img src={prodotti.immagine} alt="" height={100} width={125}></img>
                            </td>
                            <td><button className="button button-green border-radius-50" name={prodotti.id} style={{borderRadius:'50%'}} onClick={() => creaProdotto (prodotti.id, prodotti.prodotto, prodotti.costo, prodotti.immagine)}> + </button></td>
                        </tr>
                        ))
                    } 
                </tbody>
            </table>

            <Link to="/Carrello" style={{ marginTop: '20px' }}>
                <button className="button button-green border-radius-50">
                    <img src="https://media.istockphoto.com/id/1079804618/it/vettoriale/carrello-icona-nera-su-illustrazione-vettoriale-di-sfondo-bianco-per-sito-web.jpg?s=612x612&w=0&k=20&c=kqYGYXkQmNiBo3tYbV3qzu4O_mRQua63yzVj2QvFUps=" alt="" width="20" height="20" style={{borderRadius:'50%'}}/>
                </button>
            </Link>

        </div>

        </>
    );
}

export default Homepage;