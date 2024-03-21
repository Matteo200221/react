import { useContext } from "react"
import { CustomContext } from "./Context"


function Carrello () {

    const context = useContext(CustomContext)

    return(
        <div>
            <table>

                <thead>
                    <tr>
                        <th>
                            Articoli
                        </th>
                    </tr>
                </thead>

                <tbody>

                    {context.carrello.map((articolo, i) =>

                        <tr key={i}>
                            <td>
                                {articolo}
                            </td>
                        </tr>

                    )}
                </tbody>

            </table>

        </div>
    )
}

export default Carrello