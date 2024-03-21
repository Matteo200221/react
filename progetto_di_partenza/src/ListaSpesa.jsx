import CustomCheckbox from "./CustomCheckbox"
import{ useState,useEffect } from "react"

const ListaSpesa = () => {

    const [lista, setLista] = useState([])

    useEffect (() => {
        const listaTemporanea = []

        listaTemporanea.push({ nome: "Pane", checked: true })
        listaTemporanea.push({ nome: "Pasta", checked: false })
        listaTemporanea.push({ nome: "Latte", checked: false })
        listaTemporanea.push({ nome: "Verdura", checked: false })

        setLista(listaTemporanea)
    }, [])

    const cambiaInput = (event, index) => {
        const listaAppoggio = [...lista]
        listaAppoggio[index] = {...listaAppoggio[index], checked: event}
        setLista(listaAppoggio)
    }

    return (
        <div>
            { lista.map((articolo, index) => <CustomCheckbox    key={index}
                                                                index={index} 
                                                                testo={articolo.nome} 
                                                                isChecked={articolo.checked} 
                                                                cambiaInput={cambiaInput} />) }
        </div>
    )

}

export default ListaSpesa